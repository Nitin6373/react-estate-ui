// import "./styles/layout.scss"
import Navbar from "./components/navbar/Navbar.jsx"
import Home from "./routes/home/Home.jsx"

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import ListPage from "./routes/listPage/ListPage.jsx"
import Layout from "./routes/layout/Layout.jsx"
import SinglePage from "./routes/singlePage/SinglePage.jsx"
import Profile from "./routes/profile/Profile.jsx"

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
        },
        {
          path:"/profile",
          element:<Profile/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App