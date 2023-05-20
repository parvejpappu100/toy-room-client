import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const ToyDetails = () => {

    const { id } = useParams();
    const toys = useLoaderData();

    const toyDetail = toys.find(toy => toy._id == id);
    const { category, img, name, price, description , quantity} = toyDetail;

    return (
        <div className='flex flex-col lg:flex-row p-2 items-center gap-10 lg:container mx-auto my-20'>
            <div className='w-full'>
                <img className='w-ful' src={img} alt={name} />
            </div>
            <div>
                <h3 className='text-3xl uppercase font-semibold'>{name}</h3>
                <h3 className='text-xl font-semibold'>{category}</h3>
                <p className='text-xl text-gray-400 my-2'>$ {price}</p>
                <p className='font-semibold'>{description}</p>
                <div className='my-5 bg-gray-300 p-5 md:p-10 rounded'>
                    <h5 className='text-xl font-medium'>Available Quantity: {quantity}</h5>
                    <div className='flex flex-col md:flex-row md:items-center gap-5 my-3'>
                        <div>
                            <label className='text-xl font-medium' htmlFor="">Quantity : </label>
                            <input className='mx-4 w-16 h-10 text-center text-xl font-semibold' type="number" name="number" defaultValue="1" min="0" id="" />
                        </div>
                        <button className='bg-black text-white font-semibold py-2 px-4 rounded-none hover:bg-opacity-75'>Add To Cart</button>
                    </div>
                    <div className='flex items-center gap-5 mt-5'>
                        <p className='text-xl font-semibold'>Share : </p>
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF className='bg-white h-9 w-10 p-1 shadow-xl hover:text-white hover:bg-black '></FaFacebookF></a>
                        <a href="https://twitter.com" target='_blank'><FaTwitter className='bg-white h-9 w-10 p-1 shadow-xl hover:text-white hover:bg-black '></FaTwitter></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='bg-white h-9 w-10 p-1 shadow-xl hover:text-white hover:bg-black'></FaInstagram></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;