import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NotFoundSvg from '@/assets/404.svg';

const NotFound = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* SVG插图 */}
          <div className="relative mb-12">
            <img src={NotFoundSvg} alt='404页面' width={600} />
          </div>
          {/* 文字内容 */}
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            页面迷失在数字宇宙中
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            我们尝试寻找您需要的页面，但它似乎进行了维度跳跃。或许返回主页重新开始旅程？
          </motion.p>

          {/* 返回按钮 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-green-400 to-[#73c936] text-gray-900 font-medium hover:shadow-lg transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>返回安全领域</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
