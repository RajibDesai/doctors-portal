import React from 'react';
import InfoCard from '../InfoCards/InfoCard'
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 am to 5:00 pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9:00 am to 5:00 pm',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us',
            description: 'Open 9:00 am to 5:00 pm',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        }
    ]

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;