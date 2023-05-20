import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ShowCar = ({ cars }) => {
    const { _id, img, name, price, rating } = cars;
    return (
        <div className=''>
            <div className='relative transition duration-1000 transform hover:-translate-y-2 rounded  shadow hover:shadow-2xl  border'>
                <img className='w-64 h-64 py-3  mx-auto' src={img} alt="" />
                <p className='text-center italic font-semibold mb-3'><small>{name}</small></p>
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 absolute inset-0 flex justify-center items-center text-center transition-opacity duration-1000'>
                    <div>
                        <h4 className='text-xl font-semibold uppercase'>{name}</h4>
                        <div className='flex items-center gap-2 my-1 justify-center'>
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                            <p>{rating}</p>
                        </div>
                        <p className='font-bold'>${price}</p>
                        <Link to={`/toy-details/${_id}`} className="btn btn-ghost normal-case text-base bg-none border-2 border-gray-600 mt-1">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;