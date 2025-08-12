import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDoctor } from '../../service/userService'

import DocDetails from "./components/DocDetails"
import Booking from './components/Booking'
import Suggetion from './components/Suggetion'

function Appoinment() {

  const { accessToken } = useSelector(state => state.auth);
  const [doctor, setDoctor] = useState({});
  const { error, setError } = useState(null);
  const { docId } = useParams();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    const fetchDoctor = async () => {
      try {
        const data = await getDoctor(accessToken, docId)
        if (data?.doctor) {
          setDoctor(data?.doctor);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchDoctor()
  }, [accessToken, docId]);

  return (
    <div className='px-4 lg:px-0 flex flex-col gap-4'>
      <DocDetails doctor={doctor} error={error} />
      <Booking working={doctor?.working} docId={docId}
        notAvailableDays={doctor?.notAvailableDays} />
      <Suggetion speciality={doctor?.speciality} docId={docId} />
    </div>
  )
}

export default Appoinment