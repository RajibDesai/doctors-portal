import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Paiges/Home/Home/Home";
import Login from "../../Paiges/Login/Login";
import Appointment from "../../Paiges/Appointment/Appointment/Appointment";
import Signup from "../../Paiges/Signup/Signup";
import DashBoard from "../../Paiges/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            }
        ]
    }
])