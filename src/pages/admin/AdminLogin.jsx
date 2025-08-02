import LoginForm from "../../features/auth/LoginForm"
import { Link } from 'react-router-dom'

function Heading() {
  return <>
    <h2 className="text-2xl font-semibold mb-2 text-center"><span className="text-blue-500">Admin</span> Login</h2>
  </>
}

function Redirecter() {
  return <p className="text-sm mt-4 text-start">
    Doctor Login?{" "}
    <Link to="/doctor/login" className="text-indigo-600 hover:underline">
      Click here
    </Link>
  </p>
}

function AdminLogin() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoginForm Heading={<Heading />} Redirecter={<Redirecter />} />
    </div>
  )
}

export default AdminLogin