import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import useAuthInit from './hooks/useAuthInit'

import MainLayout from './layout/MainLayout'

import HomePage from './pages/user/HomePage'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import About from './pages/user/About'
import Otp from './pages/user/Otp'
import Profile from './features/user/ProfileForm'

import AdminLayout from './layout/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/Dashboard'
import AdminAppointments from './pages/admin/Appointments'
import AddDoctor from './pages/admin/AddDoctor'
import DoctorList from './pages/admin/DoctorList'

import DoctorLayout from './layout/DoctorLayout'
import DoctorLogin from './pages/doctor/DoctorLogin'
import DoctorDashboard from './pages/doctor/Dashboard'
import DoctorAppoinments from './pages/doctor/Appoinments'
import DoctorProfile from './pages/doctor/Profile'


function App() {

  useAuthInit();

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/home', element: <HomePage /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/otp', element: <Otp /> },
        { path: '/about', element: <About /> },
        { path: '/profile', element: <Profile /> }
      ],
    },
    {
      path: '/admin/login', element: <AdminLogin />
    },
    {
      path: '/doctor/login', element: <DoctorLogin />
    },
    {
      element: <AdminLayout />,
      children: [
        { path: '/admin/dashboard', element: <AdminDashboard /> },
        { path: '/admin/appoinments', element: <AdminAppointments /> },
        { path: '/admin/add-doctor', element: <AddDoctor /> },
        { path: '/admin/doctor-list', element: <DoctorList /> },
      ]
    },
    {
      element: <DoctorLayout />,
      children: [
        { path: '/doctor/dashboard', element: <DoctorDashboard /> },
        { path: '/doctor/appoinments', element: <DoctorAppoinments /> },
        { path: '/doctor/profile', element: <DoctorProfile /> }
      ]
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
