import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { id, name, picture, balance, desc1, desc2, desc3, desc4, desc5 } = service;

    const navigate = useNavigate();

    return (
        <div className='col-lg-4 col-md-6 mb-4 text-center service'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <div className='service-des'>
                <p>{desc1}</p>
                <p>{desc2}</p>
                <p>{desc3}</p>
                <p>{desc4}</p>
                <p>{desc5}</p>
            </div>
            <h5 className='my-3'>Price: <span>${balance}</span></h5>
            <button onClick={() => navigate('/service/' + id)} className='btn btn-lg'>Book Now</button>
        </div>
    );
};

export default Service;