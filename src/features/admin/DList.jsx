import { useEffect, useState } from "react"
import Loader from '../../components/Loader'
import { getAlldoctors } from '../../service/adminService'
import { useSelector } from "react-redux";
import DocCard from "../../components/DocCard";

function DList() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { accessToken } = useSelector(state => state.auth);
  useEffect(() => {
    const getDocs = async () => {
      setLoading(true);
      try {
        const data = await getAlldoctors(accessToken);
        setDoctors(data?.doctors);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (!accessToken) {
      return;
    }
    getDocs();
  }, [accessToken]);

  if (loading) {
    return <Loader />
  }
  return (
    <div className="w-full h-full p-2 overflow-y-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {
          doctors.length > 0 &&
          doctors.map((doc) => (
            <DocCard key={doc?._id} doc={doc} />
          ))
        }
      </div>
    </div>
  )
}

export default DList