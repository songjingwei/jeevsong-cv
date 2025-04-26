import { Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from '@/layout/MainLayout'
import Home from '@/pages/Home'
import CV from '@/pages/CV'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="cv" element={<CV />} />
      </Route>
      {/* 全局 404 处理（独立路由） */}
      <Route path="*" element={
        <NotFound />
      } />
    </Routes>
  )
}

export default App
