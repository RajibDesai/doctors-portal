import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ bookingData }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { price, email, patiant, _id } = bookingData;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-portal-server-ochre-seven.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accassToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confermError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patiant,
                        email: email
                    },
                },
            },
        );

        if (confermError) {
            setCardError(confermError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log("card info", card)
            // store payment into the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://doctors-portal-server-ochre-seven.vercel.app/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accassToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        setSuccess('Congrats! your payment complited')
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
        // console.log("paymentIntent", paymentIntent)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-primary btn-xs mt-4'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p>your TransactionId: <span className='fond-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;