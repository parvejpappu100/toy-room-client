import React from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/81122-error-404-page-not-found.json"
import { useNavigate, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const ErrorPage = () => {
    useTitle("Error")

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const error = useRouteError();

    return (
        <div id="error-page" className='lg:container mx-auto my-10 text-center'>
            <div className='flex items-center justify-center'>
                <Lottie className=' md:h-2/4 md:w-2/4' animationData={animation} loop={true}></Lottie>
            </div>
            <p className='text-2xl font-bold'>
                <i>{error.statusText || error.message}</i>
            </p>
            <p className='my-3'>The page you are looking for might have been removed had its named changed or it is temporary unavailable</p>
            <button onClick={handleGoBack} className='btn'>Go Back</button>
        </div>
    )
};

export default ErrorPage;