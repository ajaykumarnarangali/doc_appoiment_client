import group_profile from '/group_profiles.png'
import home_image from '/header_img.png'

function Banner() {
    return (
        <div className='w-full px-4 md:px-4 lg:px-0'>
            <div className='md:h-[576px] xl:h-[520px] w-full flex flex-col md:flex-row bg-[#5f6fff] rounded-lg px-6 md:px-12'>
                <div className='w-full md:w-1/2 h-full flex items-center justify-center flex-col py-10 gap-6'>
                    <h1 className='text-3xl lg:text-5xl text-white font-semibold lg:max-w-sm xl:max-w-lg w-full'>
                        Book Appointment
                        With Trusted Doctors
                    </h1>
                    <div className='flex items-center flex-col md:flex-row gap-2'>
                        <img src={group_profile} alt="" className='w-24' />
                        <h4 className='text-sm text-white lg:max-w-[280px] xl:max-w-sm w-full font-light'>Simply browse through our extensive list of trusted doctors,
                            schedule your appointment hassle-free.</h4>
                    </div>
                    <div className='w-full flex justify-center md:justify-start lg:px-8'>
                        <button className='bg-white text-sm lg:text-md flex items-center gap-2 text-formText py-3 px-6 rounded-full
                        transition-transform duration-300 hover:scale-105'>
                            book appoinments
                            <span className='text-xs'>
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 h-full flex items-end justify-start'>
                    <img src={home_image} alt="" className=' w-full lg:w-11/12' />
                </div>
            </div>
        </div>
    )
}

export default Banner