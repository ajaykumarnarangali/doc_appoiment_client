import Specialities from '../utils/specialities'
import { Link } from 'react-router-dom'

function Speciality() {
    return (
        <div className='flex flex-col items-center gap-10'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-3xl font-medium'>Find by speciality</h1>
                <p className='max-w-xs xl:max-w-md w-full text-sm text-formText text-center'>
                    Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                </p>
            </div>
            <div className='w-full flex justify-center'>
                <div className='flex gap-6 lg:gap-4 overflow-x-scroll lg:overflow-x-hidden items-center justify-center py-4'>
                    {
                        Specialities.map((each, ind) => (
                            <Link to={`/doctor/${each.dept_url}`} key={ind}>
                                <div className='flex flex-col items-center transition-transform duration-300 hover:-translate-y-4'>
                                    <img src={each.image} alt="dept_img" className='w-16 lg:w-24' />
                                    <h1 className='text-xs text-nowrap'>{each.name}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Speciality