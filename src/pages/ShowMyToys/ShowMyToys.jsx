import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowMyToys = ({ toy, handleDelete }) => {
    const { _id, seller, name, quantity, price, img, description, rating, category, email } = toy;
    return (
        <div className='my-5 flex flex-col md:flex-row gap-3 p-3  md:items-center justify-around border-2 shadow-sm'>
            <div className=' flex items-center gap-8'>
                <div>
                    <img className='h-36 w-36 rounded-xl' src={img} alt="" />
                </div>
                <div>
                    <h4 className='text-2xl font-semibold'>{name}</h4>
                    <p>Seller : {seller}</p>
                    <p>{category}</p>
                    <div className='flex items-center  gap-2 my-1'>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-xl font-bold'>Quantity : {quantity}</p>
            </div>
            <div>
                <p className='text-xl font-bold'>${price}</p>
            </div>
            <div className='flex flex-row md:flex-col gap-10 '>
                <Link to={`/updateToy/${_id}`}><button className='text-3xl'><FaEdit></FaEdit></button></Link>
                <button onClick={() => handleDelete(_id)} className='text-3xl text-red-500'><FaTrashAlt></FaTrashAlt></button>
            </div>
        </div>
    );
};

export default ShowMyToys;