import Banner from "../../components/Banner"
import Speciality from "../../components/Speciality"

function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Banner />
      <Speciality />
    </div>
  )
}

export default Home