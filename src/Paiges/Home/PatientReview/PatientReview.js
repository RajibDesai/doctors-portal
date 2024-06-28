import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import PatientReviewCard from '../PatientReview/PatientReviewCard'
import quote from '../../../assets/icons/quote.svg'

const PatientReview = () => {
    const reviewData = [
        {
            id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'winson herry',
            location: 'California'
        },
        {
            id:2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'winson herry',
            location: 'California'
        },
        {
            id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'winson herry',
            location: 'California'
        }
    ]
    return (
        <section className='my-16 pt-10'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-xl text-primary font-semibold'>Testimonial</h4>
                        <h2 className='text-3xl lg:text-4xl'>What Our Patients Says</h2>
                    </div>
                    <figure>
                        <img src={quote} className='w-28 lg:w-48' alt='' />
                    </figure>
                </div>
            </div>
            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviewData.map(data => <PatientReviewCard
                        key={data.id}
                        data={data}
                    ></PatientReviewCard>)
                }
            </div>
        </section>
    );
};

export default PatientReview;