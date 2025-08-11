import { Link } from 'react-router-dom'
import appoinment_image from '/appointment_img.png'

function Appoinment() {
    return (
        <div className='w-full px-4 md:px-4 lg:px-0'>
            <div className='md:h-[472px] xl:h-[372px] w-full flex flex-col md:flex-row bg-[#5f6fff] rounded-lg px-6 py-10 md:py-0 md:px-12'>
                <div className='md:w-1/2 flex flex-col gap-6 lg:items-center justify-center md:px-8 lg:px-0'>
                    <h1 className='text-xl md:text-3xl lg:text-5xl max-w-sm text-white text-start font-medium md:max-w-[100px] lg:max-w-sm w-full'>
                        Book Appointment
                        With 100+ Trusted Doctors</h1>
                    <div className='w-full flex justify-start lg:px-8 xl:px-24'>
                        <Link to={'/register'}>
                            <button className='bg-white text-sm lg:text-md flex items-center gap-2 text-formText py-3 px-6 rounded-full
                        transition-transform duration-300 hover:scale-105'>
                                Create account
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:flex md:w-1/2 items-end justify-end px-8'>
                    <img src={appoinment_image} alt="appoin_image" className='w-11/12 xl:w-9/12' />
                </div>
            </div>
        </div>
    )
}

export default Appoinment