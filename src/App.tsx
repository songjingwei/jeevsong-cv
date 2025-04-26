import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '@/pages/Home'
import MainLayout from '@/layout/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
      </Route>

    </Routes>
  )
}

export default App
