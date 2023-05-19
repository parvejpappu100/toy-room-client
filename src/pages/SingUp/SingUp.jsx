import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../assets/115794-e-commerce-page-sign-up.json"


const SingUp = () => {
    return (
        <div className='lg:container mx-auto flex flex-col md:flex-row items-center justify-center gap-5 my-20'>
            <div className='md:w-2/4 w-full flex items-center justify-center'>
                <Lottie animationData={animation} loop={true}></Lottie>
            </div>
            <div className='w-full md:w-2/4 lg:w-2/5 py-10 border md:mr-2'>
                <h3 className='text-center text-3xl font-semibold'>Login</h3>
                <form className='w-4/5 lg:w-2/3 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name='name' required className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' required className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Email</span>
                        </label>
                        <input type="text" placeholder="Your email" name='email' required className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" name='password' required className="input input-bordered " />
                    </div>
                    <input type="submit" value="Sing Up" className='w-full font-bold btn border-0  hover:bg-[#FFFFFF] hover:text-black hover:border-2  hover:border-black  bg-black text-white py-3 my-5 rounded-md' />
                </form>
                <div className='w-2/3 mx-auto'>
                    <p className='text-center'>Already have an account ? <Link to="/login" className='hover:underline font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;