import { Outlet } from "react-router-dom"

import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen bg-emerald-300 flex flex-col max-w-7xl mx-auto">
      <Header />
      <main className="flex-grow bg-gray-100 ">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout