import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa"

const ShowCar = ({ cars }) => {
    const { img, name, price, rating } = cars;
    return (
        <div className=''>
            <div className='relative transition duration-1000 transform hover:-translate-y-2 rounded  shadow hover:shadow-2xl  border'>
                <img className='w-64 h-64 py-3  mx-auto' src={img} alt="" />
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-200 absolute inset-0 flex justify-center items-center text-center transition-opacity duration-1000'>
                    <div>
                        <h4 className='text-xl font-semibold uppercase'>{name}</h4>
                        <div className='flex items-center gap-2 my-1 justify-center'>
                            <Rating
                                className='text-yellow-400'
                                readonly
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <p>{rating}</p>
                        </div>
                        <p className='font-bold'>${price}</p>
                        <button className="btn btn-ghost normal-case text-base bg-none border-2 border-gray-600 mt-1">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;