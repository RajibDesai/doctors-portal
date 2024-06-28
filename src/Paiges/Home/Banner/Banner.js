import React from 'react';
import chair from '../../../assets/images/chair.png'
import PfimaryButton from '../../../Components/PrimaryButton/PfimaryButton';
// import bgChair from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-3 md:py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PfimaryButton>Click Here</PfimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
