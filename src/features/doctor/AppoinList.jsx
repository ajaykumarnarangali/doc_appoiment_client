import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getUserAppointments } from '../../service/doctorService'
import caclAge from "../../utils/calcAge";

function AppoinList() {

  const { accessToken, user } = useSelector(state => state.auth);
  const [appointments, setappointments] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    const fetchUser = async () => {
      try {
        const data = await getUserAppointments(accessToken);
        if (data.appointments) {
          setappointments(data?.appointments || []);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser()
  }, [accessToken])

  console.log(appointments);

  return (
    <div className="p-2">
      {
        appointments.length > 0 ?

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                {appointments.map((item, ind) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{ind + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item?.userId?.image?.url} />
                      <label>{item?.userId?.username}</label>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.isPaymentComplete ? 'completed' : 'pending'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{caclAge(item?.userId?.dob)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.date}-{item?.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user?.fees} rs</td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2 text-xs">
                      <button className="border border-red-500 w-10 h-10 rounded-full text-red-600 hover:text-white hover:bg-red-600 cursor-pointer">
                        <span>
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                      </button>
                      <button className="border border-green-500  w-10 h-10 p-1 rounded-full text-green-600 hover:text-white hover:bg-green-600 cursor-pointer">
                        <span>
                          <i className="fa-solid fa-check"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          :
          <p>no data</p>
      }
    </div>
  )
}

export default AppoinList