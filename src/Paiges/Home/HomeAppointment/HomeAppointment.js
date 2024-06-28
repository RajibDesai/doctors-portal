import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PfimaryButton from '../../../Components/PrimaryButton/PfimaryButton';

const HomeAppointment = () => {
    return (
        <section className='mt-12 md:mt-24 lg:mt-36'>
            <div className="hero"
                style={{backgroundImage:`url(${appointment})`}}
            >
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="lg:w-1/2 -mt-36 rounded-lg hidden md:block" />
                    <div>
                        <h4 className='text-lg text-primary font-semibold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PfimaryButton>Appointment Here</PfimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;