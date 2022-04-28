import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='text-center text-white'>
                <h1 className='display-3'>Jacob <strong>Billy</strong></h1>
                <div className='d-flex align-items-center justify-content-between w-25 mx-auto'>
                    <div className='as'></div>
                    <div className='as-main'>*</div>
                    <div className='as'></div>
                </div>
                <p className='display-6'>Hi, I am a Photographer</p>
                <p className='display-6'>I capture people's beautiful and precious moments</p>
            </div>
        </div>
    );
};

export default Banner;