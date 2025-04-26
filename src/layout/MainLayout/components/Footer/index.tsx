const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2d2d2d]">
      <div className="container mx-auto px-4 py-8">
        {/* <!-- 内容容器 --> */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* <!-- 品牌信息 --> */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm text-gray-500">让科技服务生活</p>
          </div>

          {/* <!-- 版权声明 --> */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 jeevsong Inc.
              <span className="mx-2">|</span>
              保留所有权利
            </p>
            <p className="mt-2 text-xs text-gray-600">
              ICP备12345678号
            </p>
          </div>

          {/* <!-- 可选联系信息 --> */}
          <div className="hidden lg:block space-y-1">
            <p className="text-sm text-gray-400">
              <span className="text-gray-600">在线时间：</span>
              周一至周日 10:00 - 22:00
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-gray-600">联系邮箱：</span>
              jeevsong@163.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer
