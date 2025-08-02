import admin_logo from '/admin_logo.svg'

function AdminHeader() {
    return (
        <div className='h-20 border-b-[1px] border-black flex py-4 items-center justify-between px-3'>
            <div className='flex'>
                <div className='w-44 h-9'>
                    <img src={admin_logo} alt="" className='w-full h-full object-contain object-center' />
                </div>
                <div className='border text-xs md:text-xs px-2 py-2 md:px-5 md:py-[4px] rounded-full flex items-center justify-center'>
                    Admin 
                </div>
            </div>
            <div className='bg-blue-600 text-white text-sm py-3 px-8 rounded-full text-light hidden lg:flex'>
                Log out
            </div>
            <div className='bg-blue-600 text-white text-sm px-3 py-2 rounded-full text-light lg:hidden'>
                <span className='text-md'>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
            </div>
        </div>
    )
}

export default AdminHeader