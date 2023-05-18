import React from 'react';
import {FaTruckMoving , FaDollarSign , FaHeadset , FaHandHoldingUsd} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='lg:container mx-auto my-20 border-2 p-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Link className='flex items-center gap-5'>
                <FaTruckMoving className='text-5xl text-gray-600'></FaTruckMoving>
                <div>
                    <p className='font-bold'>FREE WORLD WIDE SHIPPING</p>
                    <p className=' font-medium '>All Order Over $100</p>
                </div>
                <div className='w-1 h-10 bg-[#a1a1a1] hidden lg:block'></div>
            </Link>
            <Link className='flex items-center gap-5'>
                <FaDollarSign className='text-5xl text-gray-600'></FaDollarSign>
                <div>
                    <p className='font-bold'>MONEY BACK GUARANTEE</p>
                    <p className=' font-medium '>If You Are Unable</p>
                </div>
                <div className='w-1 h-10 bg-[#a1a1a1] hidden lg:block'></div>
            </Link>
            <Link className='flex items-center gap-5'>
                <FaHeadset className='text-5xl text-gray-600'></FaHeadset>
                <div>
                    <p className='font-bold'>24 / 7 ONLINE SUPPORT</p>
                    <p className=' font-medium '>Call Us Anytime You Want</p>
                </div>
                <div className='w-1 h-10 bg-[#a1a1a1] hidden lg:block'></div>
            </Link>
            <Link className='flex items-center gap-5'>
                <FaHandHoldingUsd className='text-5xl text-gray-600'></FaHandHoldingUsd>
                <div>
                    <p className='font-bold'>WIN $100 ON SHOP</p>
                    <p className=' font-medium '>Enter Now</p>
                </div>
            </Link>
        </div>
    );
};

export default Services;