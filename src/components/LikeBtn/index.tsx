import { useState } from 'react';
import useSound from 'use-sound';

function LikeBtn() {
  const soundUrl = '/sounds/glug-a.mp3';

  const [playbackRate, setPlaybackRate] = useState(0.75);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <button className='group relative active:scale-[0.98] transition text-5xl hover:cursor-pointer' onClick={handleClick}>
      <span className='block transform transition-transform duration-200 group-active:scale-150' role="img" aria-label="Like this post" >
        💖
      </span >
    </button >
  );
}

export default LikeBtn;
