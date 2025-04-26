import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 主内容容器 */}
      <div className="container mx-auto px-4 py-24 text-center">
        {/* 标题部分 */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-[#73c936] bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          欢迎来到 Jeev Song 的创意空间
        </motion.h1>

        {/* 简介段落 */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          variants={itemVariants}
        >
          这里汇聚前沿技术演示与专业履历，以代码为笔，绘数字蓝图
        </motion.p>

        {/* 功能卡片容器 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 项目演示卡片 */}
          <motion.div
            className="group relative bg-[#1e1e1e] rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-[#2d2d2d] hover:border-[#73c936]/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-gradient-to-r from-green-400/20 to-[#73c936]/20">
              <svg className="w-12 h-12 text-[#73c936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">技术演示</h2>
            <p className="text-gray-400 mb-6">探索交互式项目案例，体验代码实现的创新方案</p>
            <Link
              to="/demos"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-[#73c936] text-gray-900 font-medium hover:shadow-lg transition-shadow"
            >
              查看项目
            </Link>
          </motion.div>

          {/* 简历卡片 */}
          <motion.div
            className="group relative bg-[#1e1e1e] rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-[#2d2d2d] hover:border-[#73c936]/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-6 inline-block p-4 rounded-full bg-gradient-to-r from-green-400/20 to-[#73c936]/20">
              <svg className="w-12 h-12 text-[#73c936]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.4145.414A1 1 0 0119 5.414V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">专业履历</h2>
            <p className="text-gray-400 mb-6">浏览完整职业历程，了解技术栈与项目经验</p>
            <Link
              to="/cv"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-[#73c936] text-gray-900 font-medium hover:shadow-lg transition-shadow"
            >
              查看简历
            </Link>
          </motion.div>
        </motion.div>

        {/* 装饰元素 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#73c936]/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#73c936]/05 blur-3xl -z-10"></div>
      </div>
    </motion.div>
  );
};

export default Home;
