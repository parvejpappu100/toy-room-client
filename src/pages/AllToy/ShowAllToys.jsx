import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ShowAllToys = ({ toy }) => {

    const { _id, img, name, price, rating, category, seller, quantity } = toy;

    return (
        <div className='my-20 flex flex-col md:flex-row px-5 md:p-2 md:items-center justify-around border shadow-sm'>
            <div>
                <img className='w-64' src={img} alt="" />
            </div>
            <div>
                <h5 className='text-xl font-semibold'>Toy Name : {name}</h5>
                <h5 className='font-semibold my-2'>Category : {category}</h5>
                <h3 className='font-medium'>Seller Name : {seller ? seller : "No Name Yet"}</h3>
            </div>
            <div>
                <p className=' font-bold'>Price : <span className='text-yellow-500'>${price}</span></p>
                <p className='font-bold'>Available Quantity : {quantity}</p>
                <div className='flex items-center gap-2 my-1 '>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <p>{rating}</p>
                </div>
            </div>
            <Link to={`/toy-details/${_id}`}><button className='bg-black text-white font-bold py-2 my-5 px-4 rounded-none'>Details</button></Link>
        </div>
    );
};

export default ShowAllToys;