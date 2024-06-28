import React from 'react';

const PatientReviewCard = ({ data }) => {
    const { review, img, name, location } = data
    return (
        <div className="card w-3/2 mb-1 bg-base-100 shadow-xl">
            <div className="card-body flex gap-4">
                <p className='text-lg'>{review}</p>
                <div className='flex items-center gap-4 mt-6'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'>{name}</p>
                        <p className='text-lg'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientReviewCard;