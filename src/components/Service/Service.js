import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { title, img, price, id } = service;

    const navigate = useNavigate();

    return (
        <div className='col-lg-4'>
            <img width={350} height={250} src={img} alt="" />
            <h3 className='text-primary mt-3'>{title}</h3>
            <p>Price: <span className='text-primary'>${price}</span></p>
            <button onClick={() => navigate('/package/' + id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;