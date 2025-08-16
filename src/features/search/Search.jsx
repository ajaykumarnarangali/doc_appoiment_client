import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchDoctors } from '../../service/userService'
import speciality from "../../utils/specialities";
import DocCard from "../../components/DocCard";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [delay,setDelay] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      const params = new URLSearchParams({
        ...(searchParams.get('speciality') && { speciality: searchParams.get('speciality') }),
        ...(searchParams.get('username') && { username: searchParams.get('username') })
      });//no need but i added for safety.
      try {
        const data = await searchDoctors(params);
        if (data?.doctors) {
          setDoctors(data.doctors || []);
        }
      } catch (error) {
        setError({ message: error.message ? error.message : error })
      }
    }
    fetchDoctors();
  }, [searchParams]);

  const handleSpecialitySelect = (speciality) => {
    const newParams = new URLSearchParams(searchParams);
    setDelay(true);
    
    newParams.delete('username')
    if (searchParams.get("speciality") === speciality) {
      newParams.delete("speciality");
    } else {
      newParams.set("speciality", speciality);
    }
    setTimeout(() => {
      setDelay(false);
    }, 2000);
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (!searchTerm || searchTerm == '') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('username');
      setSearchParams(newParams);
      return;
    }
    const timeout = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('username', searchTerm);
      setSearchParams(newParams);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [searchTerm])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex flex-col gap-4 px-6 py-2">
        <h1 className="text-lg font-medium">Select speciality</h1>
        <div className="flex flex-col gap-2">
          {
            speciality.map((spc, ind) => (
              <div className="flex gap-2 text-sm" key={ind}>
                <input checked={spc.dept_url == searchParams.get('speciality')} type="checkbox" onChange={() => { handleSpecialitySelect(spc.dept_url) }}
                  disabled={delay == true} />
                <label>{spc.name}</label>
              </div>
            ))
          }
        </div>
      </div>
      <div className="px-3 py-2 md:py-0">
        <div className="w-full py-2">
          <input
            value={searchTerm}
            type="text"
            onChange={handleSearch}
            placeholder="Search doctors..."
            className="w-full md:max-w-sm lg:max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm"
          />
        </div>
        {error?.message && <p className="text-red-300 py-2">{error?.message}</p>}
        {
          doctors.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                doctors.map((doc, ind) => {
                  return <DocCard doc={doc} key={ind} />
                })
              }
            </div>
            :
            <p>Loading...</p>
        }

      </div>
    </div>
  )
}

export default React.memo(Search);