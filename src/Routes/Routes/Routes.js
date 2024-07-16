import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Paiges/Home/Home/Home";
import Login from "../../Paiges/Login/Login";
import Appointment from "../../Paiges/Appointment/Appointment/Appointment";
import Signup from "../../Paiges/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../Paiges/DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../../Paiges/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";


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
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
])