import Lottie from 'lottie-react';
import React from 'react';
import error from "../Lottie/Error.json"

const ErrorPage = () => {
    return (
        <div className='max-w-4xl  mx-auto '>
            <Lottie animationData={error}/>
        </div>
    );
};

export default ErrorPage;