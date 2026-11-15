// import "./layout.scss"
import Navbar from "./components/Navbar.jsx"
import Home from "./routes/Home.jsx"

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import ListPage from "./routes/ListPage.jsx"
import Layout from "./routes/layout/Layout.jsx"
import SinglePage from "./routes/singlePage/SinglePage.jsx"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App