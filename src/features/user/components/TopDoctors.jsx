import { useEffect, useState } from 'react'
import { getAlldoctors } from '../../../service/adminService'
import { useSelector } from 'react-redux'
import DocCard from '../../../components/DocCard'
import { Link } from 'react-router-dom';

function TopDoctors() {

    const { accessToken } = useSelector(state => state.auth);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        if (!accessToken) {
            return;
        }
        const fetchDoctors = async () => {
            const data = await getAlldoctors(accessToken);
            setDoctors(data?.doctors);
        }
        fetchDoctors();
    }, [accessToken]);

    return (
        <div>

            <div className='w-full grid xl:grid-cols-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 px-4'>
                {
                    doctors.length > 0 ?
                        doctors.slice(0, 10).map((doc, ind) => (
                            <DocCard doc={doc} key={ind} />
                        ))
                        :
                        <p>issue in server connection</p>
                }
                {
                    doctors.length > 0 ?
                        doctors.slice(0, 10).map((doc, ind) => (
                            <DocCard doc={doc} key={ind} />
                        ))
                        :
                        <p>issue in server connection</p>
                }
            </div>
            <div className='mt-8 flex justify-center'>
                <Link to={'/doctor'} className='text-formText px-10 py-3 bg-slate-100 rounded-full'>
                    more
                </Link>
            </div>
        </div>
    )
}

export default TopDoctors