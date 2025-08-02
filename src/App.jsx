import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import useAuthInit from './hooks/useAuthInit'

import MainLayout from './layout/MainLayout'

import Home from './pages/user/Home'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import About from './pages/user/About'
import Otp from './pages/user/Otp'
import Profile from './features/user/ProfileForm'

import AdminLayout from './layout/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import Appointments from './pages/admin/Appointments'
import AddDoctor from './pages/admin/AddDoctor'
import DoctorList from './pages/admin/DoctorList'

import DoctorLogin from './pages/doctor/DoctorLogin'


function App() {

  useAuthInit();

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/home', element: <Home /> },
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
        { path: '/admin/dashboard', element: <Dashboard /> },
        { path: '/admin/appoinments', element: <Appointments /> },
        { path: '/admin/add-doctor', element: <AddDoctor /> },
        { path: '/admin/doctor-list', element: <DoctorList /> },
      ]
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
