import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleSignup = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    };
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
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
                            minLength: {
                                value: 6,
                                message: "min length is 6 charecter long",
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,18}/,
                                message: "Password must be strong",
                            }
                        })} className="input input-bordered w-full max-w-xs" />

                        {errors.password && <span className='text-red-600'> {errors.password.message}</span>}
                    </label>

                    <input className='btn btn-accent w-full mt-3' value='Sign Up' type="submit" />
                </form>
                <p className='mt-2 text-sm'>Already have an account ? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;