import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PfimaryButton from '../../../Components/PrimaryButton/PfimaryButton';

const Appointment = () => {
    return (
        <div className='text-center my-16 py-8 lg:pt-10 h-auto'
            style={{ background: `url(${appointment})` }}
        >
            <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
            <h3 className='text-2xl lg:text-4xl text-white'>Stay connected with us</h3>
            <div className='flex flex-col justify-center items-center gap-4 my-4'>
                <input type="text" placeholder="email address" className="input input-bordered input-md w-full max-w-md" />
                <input type="text" placeholder="subject" className="input input-bordered input-md w-full max-w-md" />
                <input type="text" placeholder="message" className="input input-bordered input-lg w-full max-w-md" />
            </div>
            <p className='pb-3'><PfimaryButton>submit</PfimaryButton></p>
        </div>
    );
};

export default Appointment;