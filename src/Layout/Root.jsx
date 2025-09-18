import React from 'react';
import Header from '../Components/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import SingleHeader from '../Components/SingleHeader';

const Root = () => {
    const location = useLocation()
    // console.log(location.pathname)
    return (
        <div>
            {location.pathname === "/" ? <Header></Header> : <SingleHeader></SingleHeader>}

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;