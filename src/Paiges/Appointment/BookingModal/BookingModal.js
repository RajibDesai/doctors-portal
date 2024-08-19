import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatement, appointmentDate, refetch }) => {
    const { name,price, slots } = treatment;
    const date = format(appointmentDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            patiant: name,
            appointmentDate: date,
            treatment: treatment.name,
            slot,
            email,
            phone,
            price
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('https://doctors-portal-server-ochre-seven.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatement(null);
                    toast.success('Booking Confermed Successfully');
                    refetch();
                }
                else {
                    toast.error(data.message);
                    setTreatement(null);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box max-w-sm">
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    </div>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full max-w-sm" />

                        <select name="slot" className="select select-bordered w-full max-w-sm">
                            {
                                slots?.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full max-w-sm" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-sm" />
                        <input className='btn btn-accent w-full max-w-xs mx-auto' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </>

    );
};

export default BookingModal;