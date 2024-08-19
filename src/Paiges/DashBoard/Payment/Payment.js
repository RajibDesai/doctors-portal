import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookingData = useLoaderData();
    const navigation = useNavigation();
    const { appointmentDate, treatment, price, slot } = bookingData;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    
    console.log(bookingData);

    return (
        <div>
            <h3 className="text-4xl">Payment for {treatment}</h3>
            <p className="text-xl">please pay <strong>{price}</strong> for your appointment on {appointmentDate} at {slot}</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        bookingData={bookingData}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;