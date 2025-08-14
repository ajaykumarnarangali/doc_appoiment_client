import React from 'react'
import info_icon from '/info_icon.svg'
import verified_icon from '/verified_icon.svg'

function DocDetails({ doctor, error }) {

    return (
        <div>
            <div className='w-full flex gap-2 flex-col md:flex-row text-sm items-start lg:justify-center'>
                <div className="flex lg:flex-col gap-2 lg:gap-0 border-2 p-2">
                    <div className='w-40 h-40 lg:w-60 lg:h-60 md:ms-2 rounded-lg overflow-hidden'>
                        <img src={doctor?.image?.url} alt="docImg" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className='bg-white border border-gray-400 p-4 flex flex-col gap-2 max-w-3xl w-full px-4 min-h-60 rounded-lg'>
                    <h1 className='text-xl font-bold'>
                        <label className="flex gap-2">{doctor?.username}
                            <img src={verified_icon} alt="" className="w-4" />
                        </label>
                    </h1>
                    <div className='text-sm text-formText flex gap-2 items-center'>
                        <h2>MBBS- {doctor?.speciality}</h2>
                        <span className='text-xs border border-1 px-1 rounded-full'>{doctor?.experience} years</span>
                    </div>
                    <div className='text-sm flex flex-col gap-1'>
                        <label className='font-bold flex gap-2'>About
                            <img src={info_icon} alt="" className="w-3" />
                        </label>
                        <p className="p-1 text-formText">
                            {doctor?.about}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className='font-bold'>Appoinment Fee:</label>
                        <label>{doctor?.fees} rs</label>
                    </div>
                    <div>
                        <label className="font-bold">Address:</label>
                        <p className="text-formText">
                            {doctor?.address}
                        </p>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default React.memo(DocDetails)