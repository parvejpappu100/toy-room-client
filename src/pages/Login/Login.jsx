import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../assets/131930-progerss.json"
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const {googleSingIn , setUser} =useContext(AuthContext);

    const handleGoogleSingIn = () => {
        googleSingIn()
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        .catch(error => {

        })
    }

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
                            <span className="label-text text-xl font-medium">Email</span>
                        </label>
                        <input type="text" placeholder="Your email" name='email' required className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" name='password' required className="input input-bordered " />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input type="submit" value="Login" className='w-full font-bold btn border-0  hover:bg-[#FFFFFF] hover:text-black hover:border-2  hover:border-black  bg-black text-white py-3 my-5 rounded-md' />
                </form>
                <div className='w-2/3 mx-auto'>
                    <h6 className='text-center my-3 font-semibold'>Or sing with</h6>
                    <div className='flex gap-10 items-center justify-center my-5'>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGithub></FaGithub></button>
                        <button onClick={handleGoogleSingIn} className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGoogle></FaGoogle></button>
                    </div>
                    <p className='text-center'>New to this website ? <Link to="/singUp" className='hover:underline font-semibold'>Sing up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;