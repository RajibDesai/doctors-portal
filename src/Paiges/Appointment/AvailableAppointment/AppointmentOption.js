import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatement }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaices' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white" onClick={() => { setTreatement(appointmentOption); document.getElementById('booking-modal').showModal() }}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;

/*
 <button disabled={slots.length === 0} className="btn btn-primary text-white" onClick={() => { document.getElementById('booking-modal').showModal(); setTreatement(appointmentOption) }}>Book Appointment</button>
*/