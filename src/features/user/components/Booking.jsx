import React from 'react'
import dayArray from '../../../utils/dayNumber'
import upcomingFivedays from '../../../utils/upcomingFivedays'
import timeArray from '../../../utils/timeArray'
import moment from 'moment'

function Booking({ working }) {

  const workingDays = {};
  dayArray.forEach((each) => {
    if (each.num >= working?.from && each.num <= working?.to) {
      workingDays[each.day] = true
    }
  });

  return (
    <div className='flex justify-start'>
      <div className='border  border-gray-400 rounded-lg p-4 w-full max-w-6xl flex flex-col gap-4'>
        <h1 className='font-semibold text-formText'>Booking slots</h1>
        <div className='flex gap-4'>
          {
            upcomingFivedays.map(({ date, name }, ind) => (
              workingDays[name] ? (
                <div
                  key={ind}
                  className="text-lg font-medium text-formText border w-14 py-4 flex flex-col
                  items-center rounded-full border-gray-400 cursor-pointer hover:bg-slate-100"
                >
                  <p>{name.slice(0, 3)}</p>
                  <p>{date}</p>
                </div>
              ) : (
                <div
                  key={ind}
                  className="text-xs font-medium text-formText border w-14 py-4 flex flex-col
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
              return (
                <div key={ind} className='text-formText text-sm font-extralight border rounded-full px-3 py-2
                hover:bg-slate-100 border-gray-300 cursor-pointer'
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
          <button className='bg-bookingButton text-white text-sm px-16 py-3 rounded-full cursor-pointer'>
            Book an appoinment
          </button>
        </div>
      </div>
    </div >
  )
}

export default React.memo(Booking)