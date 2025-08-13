import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dayArray from '../../../utils/dayNumber'
import upcomingFivedays from '../../../utils/upcomingFivedays'
import timeArray from '../../../utils/timeArray'
import { validateAppointmentDate } from '../../../utils/validations'
import { takeAppoinment, getBookedTimeSlots } from '../../../service/appoiService'
import moment from 'moment'

function Booking({ working, docId, notAvailableDays }) {

  const { user, accessToken } = useSelector(state => state.auth);
  const workingDays = {};
  dayArray.forEach((each) => {
    if (each.num >= working?.from && each.num <= working?.to) {
      workingDays[each.day] = true
    }
  });
  const navigate = useNavigate();
  const [bookedSlots, setBookedSlots] = useState([]);
  const [formData, setFormData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData({
      doctorId: docId,
      userId: user?._id,
      date: '',
      time: ''
    });
  }, [user]);

  useEffect(() => {

    if (!accessToken || !docId || !formData?.date) {
      return;
    }
    const fetchBookedSlots = async () => {
      try {
        const data = await getBookedTimeSlots(accessToken, docId, formData?.date)
        if (data?.bookedSlots) {
          setBookedSlots(data?.bookedSlots[0]?.bookedSlots);
        }
      } catch (error) {
        setError({ message: error.message ? error.message : error });
      }
    }

    fetchBookedSlots();
  }, [accessToken, docId, formData?.date]);


  const isLeave = (day) => {
    return notAvailableDays.includes(moment().date(day).format("DD-MM-YYYY"))
  }

  const handleDate = (day) => {
    if (isLeave(day)) {
      alert('doctor is Leave, please book another day');
      return;
    }
    setFormData(prev => {
      return { ...prev, date: moment().date(day).format("DD-MM-YYYY") };
    })
  }
  const handleTime = (time) => {
    setFormData(prev => {
      return { ...prev, time };
    })
  }

  const handleBooking = async () => {
    const error = validateAppointmentDate(formData);
    if (Object.keys(error).length > 0) {
      alert("please select date and time");
      return;
    }
    try {
      const data = await takeAppoinment(accessToken, formData);
      console.log(data);
      if (data.success) {
        navigate('/home')
      }
    } catch (error) {
      setError({ message: error.message ? error.message : error });
    }
  }

  return (
    <div className='flex justify-start py-4'>
      <div className='border  border-gray-400 rounded-lg p-4 w-full max-w-6xl flex flex-col gap-4'>
        <h1 className='font-semibold text-formText'>Booking slots</h1>
        <div className='flex gap-4 overflow-x-scroll md:overflow-hidden'>
          {
            upcomingFivedays.map(({ date, name }, ind) => (
              workingDays[name] ? (
                <div
                  key={ind}
                  className={`flex-shrink-0 text-lg font-medium text-formText border w-14 py-4 flex flex-col  items-end justify-center
                  ${moment(formData.date, 'DD-MM-YYYY').date() == date ? 'bg-bookingButton text-white hover:!bg-bookingButton' : ''}
                  items-center rounded-full border-gray-400 cursor-pointer hover:bg-slate-100`}
                  onClick={() => { handleDate(date) }}>
                  {
                    isLeave(date) ?
                      <p className='text-formText text-xs text-center'>Doctor is leave</p>
                      :
                      <>
                        <p>{name.slice(0, 3)}</p>
                        <p>{date}</p>
                      </>
                  }

                </div>
              ) : (
                <div
                  key={ind}
                  className="text-xs font-medium text-formText border w-14 py-4 px-1 md:px-0 flex flex-col
                  items-center justify-center text-center rounded-full border-gray-400 cursor-pointer hover:bg-slate-100"
                >
                  Not available
                </div>
              )
            ))
          }
        </div>
        <div className='flex gap-3 overflow-x-scroll md:overflow-hidden'>
          {
            timeArray(working).map((time, ind) => {
              return bookedSlots?.includes(time) ?
                (
                  <div key={ind} className={`text-formText flex-shrink-0 text-sm font-extralight border rounded-full px-3 py-2
                hover:bg-slate-100 border-gray-300 cursor-pointer`}
                    onClick={() => { alert('slot already booked . please select another') }}
                  >
                    <p>
                      slot booked
                    </p>
                  </div>
                )
                :
                (
                  <div key={ind} className={`text-formText flex-shrink-0 text-sm font-extralight border rounded-full px-3 py-2
                 ${formData.time == time ? 'bg-bookingButton text-white hover:!bg-bookingButton' : ''}
                hover:bg-slate-100 border-gray-300 cursor-pointer`}
                    onClick={() => { handleTime(time) }}
                  >
                    <p>
                      {time} {time.split(':')[0] < 12 ? 'am' : 'pm'}
                    </p>
                  </div>
                )
            })
          }
        </div>
        <div>
          <button className='bg-bookingButton text-white text-sm px-16 py-3 rounded-full cursor-pointer'
            onClick={handleBooking}>
            Book an appoinment
          </button>
        </div>
        {error && <p className='text-red-400'>{error.message}</p>}
      </div>
    </div >
  )
}

export default React.memo(Booking)