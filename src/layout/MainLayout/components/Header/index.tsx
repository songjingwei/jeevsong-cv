import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/home', name: '首页' },
    { path: '/cv', name: '简历' },
  ];

  return (
    <header className="bg-[#181818] shadow-xl sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* <!-- Logo区域 --> */}
          <div className="group/logo flex items-center space-x-2">
            <button className="w-10 h-10 
              bg-gradient-to-r from-green-400 to-[#73c936] rounded-none 
              hover:rounded-full 
              active:rounded-none active:rotate-45 active:from-red-500 
              active:to-[#ff4444] transition-all duration-200 logo">
            </button>
            <Link to="/home" className="
              text-2xl font-bold text-transparent 
              bg-clip-text bg-gradient-to-r from-green-400 to-[#73c936] 
              group-active/logo:from-red-500 group-active/logo:to-[#ff4444] 
              transition-all duration-200"
            >
              JeevSong 的客栈
            </Link>
          </div>
          {/* <!-- 导航链接 --> */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-gray-300 hover:text-white transition-colors duration-200 relative 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
          after:bg-[#73c936] hover:after:w-full after:transition-all">
              首页
            </Link>
            <Link to="/demos" className="text-gray-300 hover:text-white transition-colors duration-200 relative 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
          after:bg-[#73c936] hover:after:w-full after:transition-all">
              项目
            </Link>
            <Link to="/cv" className="text-gray-300 hover:text-white transition-colors duration-200 relative 
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
          after:bg-[#73c936] hover:after:w-full after:transition-all">
              简历
            </Link>
          </div>

          {/* <!-- 移动端菜单按钮 --> */}
          <button className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* 移动端下拉菜单 */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-[#181818] transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.path} className="w-full text-center">
                  <Link to={item.path}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#2d2d2d] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {/* 下划线动画层 */}
                    <span className="
                      absolute left-0 -bottom-1 
                      w-0 h-[2px] bg-gradient-to-r from-green-400 to-[#73c936]
                      transition-all duration-300
                      group-hover:w-3/4
                    "></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )

}

export default Header
