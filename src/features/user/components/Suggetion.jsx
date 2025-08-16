import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { getSimiliarDoctors } from '../../../service/userService'

import DocCard from '../../../components/DocCard'
import Loader from '../../../components/Loader'

function Suggetion({ speciality, docId }) {

  const [doctors, setDoctors] = useState([]);
  const { accessToken } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!accessToken || !speciality) {
      return;
    }
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const data = await getSimiliarDoctors(speciality, docId);
        if (data?.doctors) {
          setDoctors(data?.doctors);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDoctors();
  }, [accessToken, speciality]);

  return (
    <div className="py-4 flex flex-col gap-2">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-medium">Related Doctors</h1>
        <p className="text-sm"> Simply browse through our extensive list of trusted doctors.</p>
      </div>
      {
        loading ?
          <Loader />
          :
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              doctors.length > 0 ?
                doctors.map((doctor, ind) => (
                  <DocCard doc={doctor} key={ind} />
                ))
                :
                <p className="py-6 text-formText">No doctor find...</p>
            }
          </div>
      }
    </div>
  )
}

export default React.memo(Suggetion)