import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='not-found d-flex flex-column align-items-center justify-content-center'>
            <div className='d-flex mb-5'>
                <h1 className='borderRight display-3'>404</h1>
                <h1 className='display-3'>Nothing here to see</h1>
            </div>
            <button onClick={() => navigate('/')} className='btn btn-lg fs-4'>Back to homepage</button>
        </div>
    );
};

export default NotFound;