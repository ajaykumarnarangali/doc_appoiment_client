import LoginForm from "../../features/auth/LoginForm"
import { Link } from 'react-router-dom'

function Heading() {
  return <>
    <h2 className="text-2xl font-semibold mb-2">Login</h2>
    <p className="text-sm mb-4">Please log in to book appointment</p>
  </>
}

function Redirecter() {
  return <p className="text-sm mt-4 text-start">
    Create a new account?{" "}
    <Link to="/register" className="text-indigo-600 hover:underline">
      Click here
    </Link>
  </p>
}

function Login() {
  return (
    <div className="min-h-[60vh] lg:min-h-[90vh] flex items-center justify-center px-2 lg:items-start lg:mt-24">
      <LoginForm Heading={<Heading />} Redirecter={<Redirecter />} />
    </div>
  )
}

export default Login