import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from "react-day-picker";

const AppointmentBannar = ({ appointmentDate, setAppointmentDate }) => {

    return (
        <header className='my-6 hero'>
            <div className="flex gap-8 flex-col mx-auto lg:flex-row-reverse items-center overflow-hidden">
                <div className='md:shrink-0'>
                    <img src={chair} alt="dentist chair" className="max-w-[300px] md:max-w-sm rounded-lg object-cover" />
                </div>
                <DayPicker className='max-w-[300px] md:max-w-sm'
                    mode='single'
                    selected={appointmentDate}
                    onSelect={setAppointmentDate}
                />
            </div>
        </header>
    );
};

export default AppointmentBannar;