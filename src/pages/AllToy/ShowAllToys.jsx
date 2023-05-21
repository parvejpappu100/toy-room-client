import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ShowAllToys = ({ toy }) => {

    const { _id, img, name, price, rating, category, seller, quantity } = toy;

    return (
        <div className='my-20 flex flex-col md:flex-row px-5 md:p-2 md:items-center justify-around border shadow-sm'>
            {/* <div className='relative transition duration-1000 transform hover:-translate-y-2 rounded  shadow hover:shadow-2xl  border'>
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
            </div> */}

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