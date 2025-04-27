import { useState, useCallback, useEffect } from 'react';
import useSound from 'use-sound';

import counterApi from '@/api/counter';

interface FlameParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  life: number;
  velocity: number;
  angle: number;
  hue: number;
}

function LikeBtn() {
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [count, setCount] = useState(0);
  const [flames, setFlames] = useState<FlameParticle[]>([]);
  const [heat, setHeat] = useState(0);
  const soundUrl = '/sounds/glug-a.mp3';

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  // 生成更强烈的火焰粒子
  const spawnFlame = useCallback((clientX: number, clientY: number) => {
    const newFlames: FlameParticle[] = [];
    const particleCount = Math.floor(heat * 15 + 8); // 增加粒子密度

    for (let i = 0; i < particleCount; i++) {
      newFlames.push({
        id: Date.now() + i,
        x: clientX,
        y: clientY,
        scale: Math.random() * 1.2 + 0.8, // 增大粒子尺寸
        life: Math.random() * 0.8 + 0.5, // 延长生命周期
        velocity: Math.random() * 5 + 3 * (heat + 0.5), // 提高运动速度
        angle: (Math.random() * 90 - 45) * Math.PI / 180, // 扩大扩散角度
        hue: Math.random() * 30 + 20 // 更鲜艳的色调范围 (20-50)
      });
    }

    setFlames(prev => [...prev, ...newFlames]);
  }, [heat]);

  // 更流畅的火焰动画
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setFlames(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + Math.cos(p.angle) * p.velocity * 1.2,
          y: p.y - Math.sin(p.angle) * p.velocity * 0.6,
          life: p.life - 0.015,
          scale: p.scale * 0.97,
          hue: p.hue + 1.2
        })).filter(p => p.life > 0)
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    counterApi.getValue().then(res => {
      console.log('res: ', res)
      if (res.ret === 0) {
        setCount(res.data);
      }
    })
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPlaybackRate(prev => Math.min(prev + 0.1, 1.5))
    setCount(prev => prev + 1)
    setHeat(prev => Math.min(prev + 0.3, 1.5)) // 允许超过1的热量值
    spawnFlame(centerX, centerY);
    play()
    counterApi.incrementValue()
  };

  // 热量衰减（更慢的冷却速度）
  useEffect(() => {
    const cooldown = setInterval(() => {
      setHeat(prev => Math.max(prev - 0.015, 0));
    }, 100);
    return () => clearInterval(cooldown);
  }, []);

  return (
    <div className="flex items-center gap-6 relative overflow-visible">
      {/* 火焰按钮容器 */}
      <div className="relative">
        <button
          className="group relative active:scale-95 transition-transform duration-200 z-20"
          onClick={handleClick}
        >
          <div className="relative">
            {/* 基础爱心 */}
            <span className="block text-5xl transform transition-all duration-300 group-hover:scale-110">
              💖
            </span>

            {/* 高温发光效果 */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-300"
              style={{
                filter: `blur(${heat * 15}px) brightness(${1 + heat * 2})`,
                opacity: heat * 0.8,
                background: `radial-gradient(circle, 
                  hsl(40, 100%, 70%) 0%, 
                  hsl(20, 100%, 50%) 50%, 
                  hsl(0, 100%, 30%) 100%)`,
                mixBlendMode: 'screen',
                borderRadius: '50%',
                transform: `scale(${1 + heat * 0.5})`
              }}
            />
          </div>
        </button>

        {/* 背景火焰层 */}
        <div
          className="absolute -inset-8 pointer-events-none z-10"
          style={{
            opacity: heat * 0.6,
            filter: `blur(${heat * 20}px)`,
            background: `radial-gradient(circle at 50% 100%, 
              hsl(30, 100%, 70%) 0%, 
              hsl(15, 100%, 50%) 30%, 
              hsl(0, 100%, 20%) 70%)`
          }}
        />
      </div>

      {/* 计数器带火焰特效 */}
      <div className="relative z-30">
        <div className="text-4xl font-bold text-orange-500 relative">
          <span className="inline-block transform transition-transform duration-200">
            {count}
          </span>

          {/* 动态火焰粒子 */}
          <div className="absolute -inset-4 pointer-events-none">
            {flames.map(flame => (
              <div
                key={flame.id}
                className="absolute w-8 h-8 rounded-full mix-blend-screen"
                style={{
                  left: `${flame.x}px`,
                  top: `${flame.y}px`,
                  transform: `scale(${flame.scale})`,
                  opacity: flame.life * 0.9,
                  background: `radial-gradient(
                    circle at 30% 30%,
                    hsl(${flame.hue}, 100%, 70%) 10%,
                    hsl(${flame.hue + 15}, 100%, 50%) 50%,
                    hsl(${flame.hue + 30}, 100%, 30%) 90%
                  )`,
                  filter: `blur(${Math.max(flame.scale * 5, 2)}px) 
                           contrast(${120 + heat * 50}%) 
                           brightness(${1.2 + heat * 0.5})`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeBtn;
