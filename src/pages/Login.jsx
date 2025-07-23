import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-[60vh] lg:min-h-[90vh] flex items-center justify-center px-2 lg:items-start lg:mt-24">
      <div className="border p-8 rounded-xl shadow-md w-full max-w-sm text-formText">
        <h2 className="text-2xl font-semibold mb-2">Login</h2>
        <p className="text-sm mb-4">
          Please log in to book appointment
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-start">
          Create an new account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Click here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login