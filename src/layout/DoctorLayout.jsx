import DoctorHeader from '../features/doctor/components/DoctorHeader'
import DoctorSidebar from '../features/doctor/components/DoctorSidebar'
import { Outlet } from 'react-router-dom'

function DoctorLayout() {
    return (
        <div className="h-screen flex flex-col w-screen font-custom">
            <DoctorHeader />
            <div className='w-full h-[calc(100vh-80px)] flex flex-col md:flex-row'>
                <div className='md:w-60 lg:w-72 h-fit md:h-full'>
                    <DoctorSidebar />
                </div>
                <div className='flex-1 bg-gray-100 md:h-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DoctorLayout