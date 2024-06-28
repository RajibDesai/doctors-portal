import React from 'react';
import Navbar from '../Paiges/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Paiges/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;