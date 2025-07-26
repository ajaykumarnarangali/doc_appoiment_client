import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import useAuthInit from './hooks/useAuthInit'

import MainLayout from './layout/MainLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Otp from './pages/Otp'

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
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
