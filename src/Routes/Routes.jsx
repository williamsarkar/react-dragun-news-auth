import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRout from "./PrivateRout";

const Router = createBrowserRouter ([

{
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('/news.json')
          
        },
        {
            path:'/news/:id',
            element:<PrivateRout><News></News></PrivateRout>
            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
]
    
}

])

export default Router;