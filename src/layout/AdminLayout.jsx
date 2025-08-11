import AdminHeader from '../features/admin/components/AdminHeader'
import AdminSidebar from '../features/admin/components/AdminSidebar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="h-screen flex flex-col w-screen font-custom">
      <AdminHeader />
      <div className='w-full h-[calc(100vh-80px)] flex flex-col md:flex-row'>
        <div className='md:w-60 lg:w-72 h-fit md:h-full'>
          <AdminSidebar />
        </div>
        <div className='flex-1 bg-gray-100 md:h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout