import Appoinment from "./components/Appoinment"
import Banner from "./components/Banner"
import Speciality from "./components/Speciality"
import TopDoctors from "./components/TopDoctors"

function Home() {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <Banner />
      <Speciality />
      <TopDoctors />
      <Appoinment />
    </div>
  )
}

export default Home