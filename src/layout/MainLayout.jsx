import { Outlet } from "react-router-dom"

import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col max-w-[1228px] mx-auto font-custom">
      <Header />
      <main className="flex-grow py-4">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout