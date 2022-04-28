import React from 'react';
import './Review.css';

const Review = ({ review }) => {

    const { rating, picture, name, review: rev } = review;

    return (
        <div className='col-lg-4 col-md-6 mb-4 mb-lg-5'>
            <div className="review text-center">
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{rev}</p>
                <p className='rating'>Rating: <small>{rating}</small></p>
            </div>
        </div>
    );
};

export default Review;