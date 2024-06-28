import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({appointmentDate}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([]);
    const [treatment,setTreatement] = useState({});

    useEffect(()=>{
        fetch('AppointmentOptions.json')
        .then(res =>res.json())
        .then(data =>setAppointmentOptions(data))
    },[])
    return (
        <section className='my-10 flex flex-col justify-center items-center'>
            <p className='text-center text-xl md:text-3xl text-secondary font-semibold'>Available Services on {format(appointmentDate,'PP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
                {
                    appointmentOptions.map(option =><AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatement={setTreatement}
                    ></AppointmentOption>)
                }
            </div>
            { treatment &&
                <BookingModal
                appointmentDate={appointmentDate}
                treatment={treatment}
                setTreatement={setTreatement}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;