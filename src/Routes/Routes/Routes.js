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
import AddDoctors from "../../Paiges/DashBoard/AddDoctors/AddDoctors";
import ManageDoctors from "../../Paiges/DashBoard/ManageDoctors/ManageDoctors";
import Payment from "../../Paiges/DashBoard/Payment/Payment";
import DisplayError from "../../Paiges/Shared/DisplayError/DisplayError";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-ochre-seven.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])