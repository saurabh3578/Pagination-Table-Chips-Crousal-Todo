import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Chips from "./code/Chips"
import Crousal from "./code/Crousal"
import Pagination from "./code/Pagination"
import Table from "./code/Table"
import Todo from "./code/Todo"
import Home from "./code/Home"
import Header from "./code/Header"

const App=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appLayout=createBrowserRouter([
    {
        element:<App/>,
        path:"/",
        children:[
            {
                element:<Home/>,
                path:"/"
            },
            {
                element:<Chips/>,
                path:"/chips"
            },
            {
                element:<Crousal/>,
                path:"/crousal"
            },
            {
                element:<Pagination/>,
                path:"/pagination"
            },
            {
                element:<Table/>,
                path:"/table"
            },
            {
                element:<Todo/>,
                path:"/todo"
            }
        ],
        errorElement:<h1>Page Not Found!</h1>
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appLayout}/>)