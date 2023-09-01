import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import TopBar from '../components/topbar/TopBar'

const Wrapper = () => {
   return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Wrapper
