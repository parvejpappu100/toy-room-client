import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Offers = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center my-20'>
            <div className='relative overflow-hidden group '>
                <img class="group-hover:scale-110 transition-transform duration-1000 " src="https://i.ibb.co/tsMtvcN/offer1.jpg" alt="" />
                <div className='absolute inset-0 top-1/4 flex justify-end pr-5'>
                    <div>
                        <h5 className='md:text-xl  font-bold hover:text-gray-400'>RIDE ON CARS</h5>
                        <p className='italic my-3 hidden md:block text-gray-500'>Power Full Bettry Up TO 30% Off</p>
                        <p className='italic my-3 md:hidden text-gray-500'><small>Up TO 30% Off</small></p>
                        <div className='flex  items-center gap-2 underline font-semibold'>
                            <button>SHOP NOW </button>
                            <FaLongArrowAltRight></FaLongArrowAltRight>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden group '>
                <img class="group-hover:scale-110 transition-transform duration-1000 " src="https://i.ibb.co/vJGSrFt/offer2.jpg" alt="" />
                <div className='absolute inset-0 top-1/4 flex justify-end pr-5'>
                    <div>
                        <h5 className='md:text-xl  font-bold hover:text-gray-400'>RIDE ON CARS</h5>
                        <p className='italic my-3 hidden md:block text-gray-500'>Power Full Bettry Up TO 30% Off</p>
                        <p className='italic my-3 md:hidden text-gray-500'><small>Up TO 30% Off</small></p>
                        <div className='flex  items-center gap-2 underline font-semibold'>
                            <button>SHOP NOW </button>
                            <FaLongArrowAltRight></FaLongArrowAltRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;