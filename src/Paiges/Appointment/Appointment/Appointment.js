import React, { useState } from 'react';
import AppointmentBannar from '../AppointmentBannar/AppointmentBannar';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    return (
        <div>
            <AppointmentBannar
                appointmentDate={appointmentDate}
                setAppointmentDate={setAppointmentDate}
            ></AppointmentBannar>
            <AvailableAppointment
                appointmentDate={appointmentDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;