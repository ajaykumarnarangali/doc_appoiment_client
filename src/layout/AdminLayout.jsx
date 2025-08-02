import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="h-screen flex flex-col w-screen font-custom">
      <AdminHeader />
      <div className='w-full h-[calc(100vh-80px)] flex'>
        <div className='md:w-60 lg:w-72 h-full'>
          <AdminSidebar />
        </div>
        <div className='flex-1 bg-gray-100 h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout