import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateProfileData, updateProfileImage } from '../../service/doctorService'
import { setUser } from '../../features/auth/authSlice'

function ProfileForm() {
  const { user, accessToken } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    about: '',
    fees: '',
    address: ''
  });
  const [image, setImage] = useState('');
  const [isImageEdit, setImageEdit] = useState(false);
  const [isEdit, setIsedit] = useState(false);
  const [error, setError] = useState(null);
  const imageRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({
      username: user?.username || '',
      about: user?.about || '',
      fees: user?.fees || '',
      address: user?.address || ''
    })
  }, [user]);

  const handleFormchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = await updateProfileData(accessToken, formData);
      if (data?.doctor) {
        dispatch(setUser({ user: data?.doctor }))
      }
    } catch (error) {
      setError(error)
    } finally {
      setIsedit(false);
    }
  }

  const handleImageUpdate = async (e) => {
    const selectedImage = e.target.files[0];
    setImage(e.target.files[0]);
    const ImageData = new FormData();
    ImageData.append('image', selectedImage);
    try {
      const data = await updateProfileImage(accessToken, ImageData);
      console.log(data);
      if (data?.doctor) {
        dispatch(setUser({ user: data?.doctor }))
      }
    } catch (error) {
      setError(error)
    } finally {
      setImageEdit(false);
    }
  }

  return (
    <div className='w-full flex gap-2 flex-col lg:flex-row text-sm items-start'>
      <div className="flex lg:flex-col gap-2 lg:gap-0">
        <div className='w-40 h-40 lg:w-60 lg:h-60 ms-2 md:ms-0'>
          <img src={image ? URL.createObjectURL(image) : user?.image?.url} alt="docImg" className="w-full h-full object-cover"
            onClick={() => { imageRef.current.click() }} />
          <input type="file" className="hidden" onChange={handleImageUpdate} ref={imageRef} />
        </div>
        {isImageEdit ?
          <button className='px-6 h-9 border mt-3 text-sm text-center rounded-full border-blue-300 hover:bg-red-500 hover:text-white cursor-pointer'
            type="submit"
            key="edit-image-mode"
            onClick={() => { setImageEdit(false) }}
          >
            cancel
          </button>
          :
          <button className='px-6 h-9 border mt-3 text-sm text-center rounded-full border-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer'
            type="submit"
            key="edit-image-mode"
            onClick={() => { setImageEdit(true) }}
          >
            edit image
          </button>
        }
      </div>
      <form className='bg-white p-2 flex flex-col gap-2 max-w-3xl w-full px-4 min-h-60 rounded-lg'
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
          {isEdit ?
            <input type="tel" name="about" className={`${isEdit ? 'border' : 'bg-white'} p-1 text-formText flex-1`} disabled={!isEdit}
              value={formData?.about}
              onChange={handleFormchange}
            />
            :
            <p className="p-1 text-formText">
              {formData?.about}
            </p>
          }
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
          {isEdit ?
            <input type="tel" name="address" className={`${isEdit ? 'border' : 'bg-white'} p-1 text-formText flex-1`} disabled={!isEdit}
              value={formData?.address}
              onChange={handleFormchange}
            />
            :
            <p className="p-1 text-formText">
              {formData?.address}
            </p>
          }
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
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