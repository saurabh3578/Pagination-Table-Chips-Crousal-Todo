import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Chips from "./code/Chips"
import Crousal from "./code/Crousal"
import Pagination from "./code/Pagination"
import Todo from "./code/Todo"
import Home from "./code/Home"
import Header from "./code/Header"

const data=[
    {
        title:"Title1",
        discription:"Discription1"
    },
    {
        title:"Title2",
        discription:"Discription2"
    },
    {
        title:"Title3",
        discription:"Discription3"
    },
    {
        title:"Title4",
        discription:"Discription4"
    },
    {
        title:"Title5",
        discription:"Discription5"
    },
    {
        title:"Title6",
        discription:"Discription6"
    },
]

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
                element:<Crousal data={data}/>,
                path:"/crousal"
            },
            {
                element:<Pagination/>,
                path:"/pagination"
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