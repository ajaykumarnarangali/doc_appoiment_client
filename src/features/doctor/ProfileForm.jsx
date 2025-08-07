import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

function ProfileForm() {
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState();

  useEffect(() => {
    setFormData({
      username: user?.username || '',
      about: user?.about || '',
      fees: user?.fees || '',
      address: user?.address || ''
    })
  }, [user]);
  const [isEdit, setIsedit] = useState(false);

  const handleFormchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsedit(false);
    console.log(formData);
  }


  return (
    <div className='w-full flex gap-2 flex-col lg:flex-row text-sm items-start'>
      <div className='w-40 h-40 lg:w-60 lg:h-60 ms-2 md:ms-0'>
        <img src={user?.image?.url} alt="docImg" className="w-full h-full object-cover" />
      </div>
      <form className='bg-white p-2 flex flex-col gap-2 max-w-3xl w-full px-4 min-h-60'
        onSubmit={handleProfileUpdate}>
        <h1 className='text-xl font-bold'>
          <input type="tel" name="username" className={`${isEdit ? 'border' : 'bg-white'} p-1 flex-1`} disabled={!isEdit}
            value={formData?.username}
            onChange={handleFormchange}
          />
        </h1>
        <div className='text-sm text-formText flex gap-2 items-center'>
          <h2>MBBS- {user?.speciality}</h2>
          <span className='text-xs border border-1 px-1 rounded-full'>{user?.experience} years</span>
        </div>
        <div className='text-sm flex flex-col gap-1'>
          <label className='font-bold'>About :</label>
          <input type="tel" name="about" className={`${isEdit ? 'border' : 'bg-white'} p-1 text-formText flex-1`} disabled={!isEdit}
            value={formData?.about}
            onChange={handleFormchange}
          />
        </div>
        <div className="flex items-center">
          <label>Appoinment Fee:</label>
          <input type="tel" name="fees" className={`${isEdit ? 'border' : 'bg-white'} p-1 text-formText w-[34px]`} disabled={!isEdit}
            value={formData?.fees}
            onChange={handleFormchange}
          />rs
        </div>
        <div>
          <label>Address:</label>
          <input type="tel" name="address" className={`${isEdit ? 'border' : 'bg-white'} p-1 text-formText flex-1`} disabled={!isEdit}
            value={formData?.address}
            onChange={handleFormchange}
          />
        </div>
        <div>

          {isEdit ?
            <button className='px-6 h-9 border mt-3 text-sm text-center rounded-full border-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer'
              type="submit"
              key="view-mode"
            >
              save information
            </button>
            :
            <button className='w-20 p-0 h-9 border text-sm text-center rounded-full border-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer'
              onClick={() => { setIsedit(true) }}
              key="edit-mode"
              type="button"
            >
              edit
            </button>
          }
        </div>
      </form>
    </div>
  )
}

export default ProfileForm