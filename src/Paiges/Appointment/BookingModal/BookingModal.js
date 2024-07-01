import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatement, appointmentDate }) => {
    const { name, slots } = treatment;
    const date = format(appointmentDate, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment:name,
            patiant:name,
            slot,
            email,
            phone
        }
        console.log(booking)
        setTreatement({});
    }

    return (
        <>
            <dialog id="booking-modal" className="modal">
                <div className="modal-box max-w-sm">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form >
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

                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-sm" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-sm" />
                        <input className='btn btn-accent w-full block max-w-xs mx-auto' type="submit" value="Submit" />
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default BookingModal;