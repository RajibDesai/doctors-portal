import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import PatientReview from '../PatientReview/PatientReview';
import AppointmentInput from '../AppointmentInput/AppointmentInput'


const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <PatientReview></PatientReview>
            <AppointmentInput></AppointmentInput>
        </div>
    );
};

export default Home;