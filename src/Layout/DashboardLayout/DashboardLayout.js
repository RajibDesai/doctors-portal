import React, { useContext } from 'react';
import Navbar from '../../Paiges/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';
import Footer from '../../Paiges/Shared/Footer/Footer';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // call useAdmin hooks and set email as parameter
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu text-base-content min-h-full w-60 p-4">
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;