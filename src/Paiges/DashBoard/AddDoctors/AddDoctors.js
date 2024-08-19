import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_IMAGEBB_API_KEY
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['Specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ochre-seven.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        // console.log(data);
        const image = data.image[0];
        // console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // save doctor information to the database
                    fetch('https://doctors-portal-server-ochre-seven.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accassToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added sussfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add a Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

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
                    <div className="label"><span className="label-text">Specialty</span></div>

                </label>
                <select
                    {...register("specialty")}
                    className="select select-bordered w-full max-w-xs">
                    {
                        specialties.map(specialty => <option
                            key={specialty._id}
                            value={specialty.name}
                        >{specialty.name}</option>)
                    }
                </select>

                <label className="form-control w-full max-w-xs">
                    <div className="label"> <span className="label-text">Photo</span></div>

                    <input type="file" {...register("image", { required: true })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <span className='text-red-600'>Photo is required</span>}
                </label>

                <input className='btn btn-accent w-full mt-3' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctors;