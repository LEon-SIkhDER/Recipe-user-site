import React, { use } from 'react';
import Header from '../Components/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import SingleHeader from '../Components/SingleHeader';
import { AuthContext } from '../AuthContext/AuthContext';

const Root = () => {
    const location = useLocation()
    const {dark} = use(AuthContext)
    // console.log(location.pathname)
    return (
        <div className={`${dark?"dark":""}`}>
            {location.pathname === "/" ? <Header></Header> : <SingleHeader></SingleHeader>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;