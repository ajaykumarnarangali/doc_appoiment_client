import about_image from '/about_image.png'

function About() {
    return (
        <div className='lg:min-h-screen px-2 lg:px-0'>
            <h1 className='text-2xl text-center text-formText my-5 md:my-7 lg:my-10'>ABOUT<span className='text-black font-semibold'>US</span></h1>
            <div className='lg:h-96 flex flex-col md:flex-row px-2 gap-4 md:gap-0'>
                <div className='h-full w-full md:w-80 lg:w-96'>
                    <img src={about_image} className='h-full w-full' />
                </div>
                <div className='text-sm text-formText  flex flex-col gap-4 justify-center md:px-8 lg:px-12'>
                    <p className='md:max-w-lg lg:max-w-2xl'>
                        Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
                        At Prescripto, we understand the challenges
                        individuals face when it comes to scheduling doctor appointments and managing their health records.
                    </p>
                    <p className='md:max-w-lg max-w-2xl'>
                        Prescripto is committed to excellence in healthcare technology. We continuously strive
                        to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
                        Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    </p>
                    <h4 className='font-bold'>Our Vision</h4>
                    <p className='md:max-w-lg max-w-2xl'>
                        Our vision at Prescripto is to create a seamless healthcare experience for every user.
                        We aim to bridge the gap between patients and healthcare providers, making it easier for you
                        to access the care you need, when you need it.
                    </p>
                </div>
            </div>
            <div className='mb-10'>
                <h1 className='text-xl font-normal mt-10 mb-5 text-center md:text-start'>WHY <span className='font-semibold text-[#374152]'>CHOOSE US</span></h1>
                <div className='grid w-full grid-cols-1 md:grid-cols-3 md:h-56 text-formText cursor-pointer'>
                    <div className='h-52 border md:h-full flex items-center justify-center hover:bg-blue-500 hover:text-white'>
                        <div>
                            <h1 className='font-semibold'>
                                EFFICIENCY:
                            </h1>
                            <p className='max-w-60 text-sm'>
                                Streamlined appointment scheduling that fits into your busy lifestyle.
                            </p>
                        </div>
                    </div>
                    <div className='h-52 md:h-full border flex items-center justify-center hover:bg-blue-500 hover:text-white'>
                        <div>
                            <h1 className='font-semibold'>
                                CONVENIENCE:
                            </h1>
                            <p className='max-w-60 text-sm'>
                                Access to a network of trusted healthcare professionals in your area.
                            </p>
                        </div>
                    </div>
                    <div className='h-52 md:h-full border flex items-center justify-center hover:bg-blue-500 hover:text-white'>
                        <div>
                            <h1 className='font-semibold'>
                                PERSONALIZATION:
                            </h1>
                            <p className='max-w-60 text-sm'>
                                Tailored recommendations and reminders to help you stay on top of your health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About