import { useState, useRef } from 'react';
import DocIcon from '/General_physician.svg';
import Speciality from '../../utils/departments'
import { validateDoctRegForm } from '../../utils/validations';
import { useNavigate } from 'react-router-dom';
import { DoctorReg } from '../../service/adminService'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import dayArray from '../../utils/DayNumber';

function DoctorForm() {

  const imageRef = useRef();
  const navigate = useNavigate();
  const { accessToken } = useSelector(state => state.auth);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    experience: '0',
    fees: '',
    about: '',
    speciality: 'General Physician',
    degree: '',
    address: '',
    working: {
      from: '1',
      to: '5',
      time: 'not_selected'
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == 'from' || name == 'to' || name == 'time') {
      setFormData((prev) => {
        return { ...prev, working: { ...prev.working, [name]: value } };
      })
      return;
    }
    setError((prev) => {
      return { ...prev, [name]: null }
    });
    setFormData((prev) => {
      return { ...prev, [name]: value };
    })
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleDoctorReg = async (e) => {
    e.preventDefault();
    const verror = validateDoctRegForm(formData);
    setError(verror);
    console.log(formData);
    if (Object.keys(verror).length !== 0) {
      return;
    }
    const Form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        Form.append(key, JSON.stringify(value));
      } else {
        Form.append(key, value);
      }
    });
    Form.append('image', image);
    setLoading(true);
    try {
      const response = await DoctorReg(accessToken, Form);
      console.log(response);
      if (response.success) {
        navigate('/admin/doctor-list')
      }
    } catch (error) {
      setError({
        apiError: error?.message
      })
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className='w-full h-fit flex flex-col gap-2'>
      <h1 className='text-md font-medium text-center md:text-start'>Add Doctor</h1>
      <div className='w-full max-w-4xl bg-white h-full rounded p-6'>
        <form className='w-full h-full flex flex-col gap-4'
          onSubmit={handleDoctorReg}>
          <div>
            <div className='flex gap-2 items-center'>
              <img src={image ? URL.createObjectURL(image) : DocIcon} alt="doc_icon" className='w-16' />
              <input type='file' ref={imageRef} className='hidden' onChange={handleImageChange}>
              </input>
              <button className='border border-fuchsia-400 px-2 py-1 rounded-full text-sm'
                key={'image-btn'}
                type='button'
                onClick={() => { imageRef.current.click() }}
              >
                upload Doc Image
              </button>
            </div>
          </div>
          <div className='w-full h-fit flex gap-2 flex-col lg:flex-row'>
            <div className='flex-1 flex flex-col gap-2'>

              <div>
                <label className="block text-sm mb-1 text-formText">Doctor Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full border ${error?.username ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                  placeholder="Enter doctor name"
                />
                {error?.username && <p className="text-red-500 text-sm mt-1">{error.username}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-formText">Doctor Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${error?.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                  placeholder="Enter doctor email"
                />
                {error?.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-formText">Set password</label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full border ${error?.password ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                  placeholder="Create a password for doctor"
                />
                {error?.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1 text-formText">Experience</label>
                <select name="experience" className='w-full border py-2 outline-none rounded-lg text-formText'
                  value={formData.experience}
                  onChange={handleChange}
                >
                  {
                    Array(10).fill(0).map((_, ind) => (
                      <option value={ind + 1} key={ind} className='text-formText'>
                        {ind + 1}
                      </option>
                    ))
                  }
                </select>
                {error?.experience && <p className="text-red-500 text-sm mt-1">{error.experience}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-formText">About</label>
                <textarea name="about" className={'border bg-white p-2 flex-1 w-full'}
                  value={formData.about}
                  onChange={handleChange}
                />
                {error?.about && <p className="text-red-500 text-sm mt-1">{error.about}</p>}
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <div>
                <label className="block text-sm mb-1 text-formText">Fees</label>
                <input
                  type="number"
                  name="fees"
                  value={formData.fees}
                  onChange={handleChange}
                  className={`w-full border ${error?.fees ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                  placeholder="Enter Doctor Fees"
                />
                {error?.fees && <p className="text-red-500 text-sm mt-1">{error.fees}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1 text-formText">working days</label>
                <div className='flex gap-2'>
                  <div className='flex gap-2 items-center text-sm'>
                    <label className='text-formText'>From:</label>
                    <select name="from" className='w-full border py-2 outline-none rounded-lg text-formText'
                      value={formData.working.from}
                      onChange={handleChange}>
                      {
                        dayArray.map((each, ind) => (
                          <option value={each.num} key={ind} className='text-formText'>
                            {each.day}
                          </option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='flex gap-2 items-center text-sm'>
                    <label className='text-formText'>To:</label>
                    <select name="to" className='w-full border py-2 outline-none rounded-lg text-formText'
                      value={formData.working.to}
                      onChange={handleChange}>
                      {
                        dayArray.map((each, ind) => (
                          <option value={each.num} key={ind} className='text-formText'>
                            {each.day}
                          </option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='flex gap-2 items-center text-sm'>
                    <label className='text-formText'>Time:</label>
                    <select name="time" className='w-full border py-2 outline-none rounded-lg text-formText'
                      value={formData.working.time}
                      onChange={handleChange}>
                      <option value="not_selected">Select Time Slot</option>
                      <option value="10:00-13:00">10:00 AM - 1:00 PM</option>
                      <option value="14:00-18:00">2:00 PM - 4:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-formText">Speciality</label>
                <select name="speciality" className='w-full border py-2 outline-none rounded-lg text-formText'
                  value={formData.speciality}
                  onChange={handleChange}>
                  {
                    Speciality.map((each, ind) => (
                      <option value={each} key={ind} className='text-formText'>
                        {each}
                      </option>
                    ))
                  }
                </select>
                {error?.speciality && <p className="text-red-500 text-sm mt-1">{error.speciality}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-formText">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className={`w-full border ${error?.degree ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                  placeholder="Enter doctors highest degree"
                />
                {error?.degree && <p className="text-red-500 text-sm mt-1">{error.degree}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1 text-formText">address</label>
                <textarea name="address" className={'border bg-white p-2 flex-1 w-full'}
                  value={formData.address}
                  onChange={handleChange}
                />
                {error?.address && <p className="text-red-500 text-sm mt-1">{error.address}</p>}
              </div>
              {error?.apiError && <p className="text-red-500 text-sm mt-1">{error.apiError}</p>}
              <div className='flex py-3 justify-end'>
                <button className='border  border-blue-400 p-2 w-fit  rounded text-sm hover:bg-blue-400 hover:text-white'
                  key={'form-btn'}
                  type='submit'>
                  Add doctor
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DoctorForm