import DoctorForm from "../../features/admin/DoctorForm"

function AddDoctor() {
  return (
    <div className="w-full h-full py-4 md:px-6 md:overflow-y-scroll lg:overflow-hidden">
      <DoctorForm />
    </div>
  )
}

export default AddDoctor