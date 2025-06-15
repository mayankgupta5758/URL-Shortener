import { Outlet } from '@tanstack/react-router'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout