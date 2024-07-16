import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ appointmentDate }) => {
    const [treatment, setTreatement] = useState(null);
    const date = format(appointmentDate, 'PP')
    // console.log(date);

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <div className='flex justify-center items-center'><Loading></Loading></div>
    }

    return (
        <section className='my-10 flex flex-col justify-center items-center'>
            <p className='text-center text-xl md:text-3xl text-secondary font-semibold'>Available Services on {format(appointmentDate, 'PP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatement={setTreatement}
                    ></AppointmentOption>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    appointmentDate={appointmentDate}
                    treatment={treatment}
                    setTreatement={setTreatement}
                    refetch={refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;