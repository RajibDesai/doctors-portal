import React from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = (data) => {
        console.log(data)
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label"> <span className="label-text">Email</span></div>

                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />

                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label"><span className="label-text">Password</span></div>

                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 character or longer" } })} />

                        <div className="label"><span className="label-text-alt">Forgot Password ?</span></div>

                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </label>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p className='mt-2 text-sm'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;