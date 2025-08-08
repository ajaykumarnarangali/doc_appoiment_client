import { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateProfileData, updateProfileImage } from '../../service/userService'
import { setUser } from '../../features/auth/authSlice'

function ProfileForm() {

  const [isEdit, setIsedit] = useState(false);
  const [changeImage, setChangeImage] = useState(false)
  const { user, accessToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [error, setError] = useState(null)
  const imageRef = useRef();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username ?? "",
        email: user.email ?? "",
        phone: user.phone ?? "",
        address: user.address ?? "",
        gender: user.gender ?? "",
        dob: user.dob ?? "",
      });
    }
  }, [user]);

  const handleImageChange = async (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    const ImageData = new FormData();
    ImageData.append('image', selectedImage);
    try {
      const data = await updateProfileImage(accessToken, ImageData);
      if (data?.user) {
        dispatch(setUser({ user: data?.user }));
        setChangeImage(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }


  const handleFormchange = (e) => {
    const { name, value } = e.target;
    if (!name) return;
    setFormData(prev => {
      return { ...prev, [name]: value }
    })
  }


  const handleProfile = async (e) => {
    e.preventDefault();
    try {
      const data = await updateProfileData(accessToken, formData);
      if (data?.success == false) {
        console.log(data.message);
        setError(data?.message);
        return;
      }
      if (data?.user) {
        dispatch(setUser({ user: data?.user }));
        setChangeImage(false);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsedit(false);
    }
  }


  return (
    <div className="min-h-[60vh] lg:min-h-[90vh] mx-4 lg:mx-0 lg:py-4 font-custom flex flex-col gap-4">
      <form className="flex flex-col"
        onSubmit={handleProfile}>
        <div className='flex flex-col gap-6 max-w-md'>
          <div className='w-36 h-36 bg-blue-400 rounded-md flex gap-2'>
            <img src={image ? URL.createObjectURL(image) : user?.image?.url} alt="img" className='w-full h-full rounded-md object-cover object-center'
              onClick={() => { changeImage && imageRef.current.click() }} />
            <input type="file" className="hidden" ref={imageRef} onChange={handleImageChange} />
            <button className='p-2 h-9 border text-sm text-center rounded-full border-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer'
              onClick={() => { setChangeImage(true) }}
              key="edit-image"
              type="button"
            >
              Image
            </button>
          </div>
          <div>
            <h1 className='text-3xl mb-2'>{formData.username}</h1>
            <hr className='border-slate-500' />
          </div>
        </div>
        <div className='flex flex-col max-w-sm'>
          <h1 className='text-sm text-footerText underline my-2'>
            CONTACT INFORMATION
          </h1>
          <div className='flex gap-4 items-start'>
            <label className="text-nowrap text-sm w-20 pt-1">Email ID:</label>
            <input type="email" name="email" className={`${isEdit ? 'border' : 'bg-white'} p-2 flex-1`} disabled={!isEdit}
              value={formData.email}
              onChange={handleFormchange} />
          </div>
          <div className='flex gap-4 items-start'>
            <label className="text-nowrap text-sm w-20 pt-1">Phone:</label>
            <input type="tel" name="phone" className={`${isEdit ? 'border' : 'bg-white'} p-2 flex-1`} disabled={!isEdit}
              value={formData.phone}
              onChange={handleFormchange} />
          </div>
          <div className='flex gap-4 items-start'>
            <label className="text-nowrap text-sm w-20 pt-1">Address:</label>
            <textarea name="address" className={`${isEdit ? 'border' : 'bg-white'} p-2 flex-1`} disabled={!isEdit}
              value={formData.address}
              onChange={handleFormchange} />
          </div>
        </div>

        <div className='flex flex-col max-w-sm'>
          <h1 className='text-sm text-footerText underline my-2'>
            BASIC INFORMATION
          </h1>
          <div className='flex gap-4 items-start'>
            <label className="text-nowrap text-sm w-20 pt-1">Gender:</label>
            <select name="gender" className={`${isEdit ? 'border' : 'bg-white'} p-2 flex-1`} disabled={!isEdit}
              value={formData.gender}
              onChange={handleFormchange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='flex gap-4 items-start'>
            <label className="text-nowrap text-sm w-20 pt-1">Birthday:</label>
            <input type={`${isEdit ? 'date' : 'text'}`} name="dob" className={`${isEdit ? 'border' : 'bg-white'} p-2 flex-1`} disabled={!isEdit}
              value={formData.dob}
              onChange={handleFormchange} />
          </div>
          {error && <p className="text-sm text-red-500"> {error}</p>}
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
        </div>
      </form>
    </div >
  )
}

export default ProfileForm