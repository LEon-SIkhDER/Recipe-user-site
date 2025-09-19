import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext/AuthContext';
import Lottie from 'lottie-react';
import loadingLottie from "./Lottie/Loading.json"
// import { useState } from 'react';


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()

    // const [loading, setLoading] = useState(true);
    if (loading) {
        return (
            <div className='w-2xs mx-auto '>
                <Lottie animationData={loadingLottie} />
            </div>
        )
    }
    if (!user) {
        return <Navigate to={"/signin"} state={location.pathname} />
    }


    return children
};

export default PrivateRoute;