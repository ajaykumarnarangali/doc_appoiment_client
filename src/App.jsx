import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainLayout from './layout/MainLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'

function App() {

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/about', element: <About /> }
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
