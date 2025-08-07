import { Link, useLocation } from 'react-router-dom'

import DashIcon from '/home_icon.svg'
import AppoinmentIcon from '/appointment_icon.svg'
import DocListIcon from '/people_icon.svg'

function DoctorSidebar() {

    const path = useLocation();

    const SidebarElements = [
        {
            name: 'Dashboard',
            path: '/doctor/dashboard',
            icon: DashIcon
        },
        {
            name: 'Appointments',
            path: '/doctor/appoinments',
            icon: AppoinmentIcon
        },
        {
            name: 'Profile',
            path: '/doctor/profile',
            icon: DocListIcon
        },
    ]

    return (
        <div className='h-full w-full border border-r-slate-200 py-6'>
            <div>
                {
                    SidebarElements.map((ele, ind) => (
                        <Link to={ele.path} key={ind} className={`hover:bg-slate-50 h-12 flex items-center 
                        ${path.pathname == ele.path ? 'border-r-4 bg-slate-100 border-r-blue-400' : ''}`}>
                            <div className='flex gap-3 px-8 text-sm items-center'>
                                <img src={ele.icon} className='w-5' />
                                <h1>{ele.name}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default DoctorSidebar