import { Link } from 'react-router-dom'
import Logo from '/logo.svg'

function Header() {
  return (
    <div className='h-20 border-b-[1px] border-black flex py-4 items-center justify-between px-3 lg:px-0'>
      <div className='w-44 h-9'>
        <img src={Logo} alt="" className='w-full h-full object-contain object-center' />
      </div>
      <div className='gap-5 text-sm font-medium items-center hidden lg:flex'>
        <ul className='flex gap-5'>
          <li>
            <Link to={'/home'} className="underline decoration-blue-500 underline-offset-4 decoration-[1.5px]">
              HOME
            </Link>
          </li>
          <li>
            <Link to={'/home'} className="underline decoration-blue-500 underline-offset-4 decoration-[1.5px]">
              ALL DOCTORS
            </Link>
          </li>
          <li>
            <Link to={'/about'} className="underline decoration-blue-500 underline-offset-4 decoration-[1.5px]">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to={'/home'} className="underline decoration-blue-500 underline-offset-4 decoration-[1.5px]">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className='border text-xs px-5 py-[4px] rounded-full'>
          <Link to={'/admin/login'}>
            Admin Panel
          </Link>
        </div>
      </div>
      <Link to={'/login'}>
        <div className='bg-blue-600 text-white text-sm py-3 px-8 rounded-full text-light hidden lg:flex'>
          Create account
        </div>
      </Link>
      <div className='lg:hidden cursor-pointer'>
        <span className='text-xl'>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </div>
  )
}

export default Header