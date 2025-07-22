import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainLayout from './layout/MainLayout'

import Home from './pages/Home'

function App() {

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/', index: true, element: <Home /> }
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
