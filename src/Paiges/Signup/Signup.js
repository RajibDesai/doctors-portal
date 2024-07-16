import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserToMoDb(data.name, data.email)
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            });
    }

    const saveUserToMoDb = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Save User", data);
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <label className="form-control w-full max-w-xs">
                        <div className="label"> <span className="label-text">Name</span></div>

                        <input type="text" {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-600'>Name is required</span>}
                    </label>


                    <label className="form-control w-full max-w-xs">
                        <div className="label"> <span className="label-text">Email</span></div>

                        <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text">Password</span></div>

                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </label>

                    <input className='btn btn-accent w-full mt-3' value='Sign Up' type="submit" />
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </form>
                <p className='mt-2 text-sm'>Already have an account ? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;