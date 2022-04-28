import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {

    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('service.json').then(res => res.json()).then(data => setServices(data))
    }, []);

    useEffect(() => {
        fetch('reviews.json').then(res => res.json()).then(data => setReviews(data))
    }, []);

    return (
        <>
            <Banner />
            <div className="container mt-4 services-container">
                <h2 className='text-center h1'>WANT ME TO SHOOT YOU?</h2>
                <div className="row mt-4">
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
            <div className="container mt-3 review-container">
                <h2 className='text-center h1 mb-4'>WHAT MY CLIENTS SAY</h2>
                <div className="row">
                    {
                        reviews.map(review => <Review key={review.id} review={review} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;