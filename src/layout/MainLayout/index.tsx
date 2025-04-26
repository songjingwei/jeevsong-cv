import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


const MainLayout = () => {
  return (
    <div className='h-full w-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
