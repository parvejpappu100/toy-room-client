import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from "../../assets/115794-e-commerce-page-sign-up.json"
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';


const SingUp = () => {
    useTitle("Sing Up")

    const { createUser, setUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        // * validate:
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setRegisterError("Please add at least two upper case letter.")
            return;
        }
        else if (!/(?=.*[@$!%*?&])/.test(password)) {
            setRegisterError('Password should be at least one special character')
            return;
        }
        else if (password.length < 6) {
            setRegisterError('Please add at least 6 character in you password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setSuccess("User has create successfully")
                setRegisterError('');
                event.target.reset();
                updateUserData(user, name, photo)
            })
            .catch(error => {
                setRegisterError(error.message)
                setSuccess('');
            })


    }

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {

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
                <h3 className='text-center text-3xl font-semibold'>Sing Up</h3>
                <form onSubmit={handleSingUp} className='w-4/5 lg:w-2/3 mx-auto'>
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
                    <p className="text-green-400 mb-3 text-center">{success}</p>
                    <p className="text-red-500 mb-3 font-semibold text-center">{registerError}</p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;