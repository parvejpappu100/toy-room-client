import React from 'react';
import Navbar from '../shared/Navbar/Navbar/Navbar';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Footer from '../shared/Footer/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:container mx-auto text-2xl text-center my-5'>{navigation.state === "loading" && <progress className="progress w-56"></progress>}</div>
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;