import React from 'react';
import { useNavigate, useNavigationType, useParams } from 'react-router-dom';

const services = [
    { id: 1, title: 'Single Bedroom', img: 'https://images.unsplash.com/photo-1635315891380-f70330a5b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2xlJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 100 },
    { id: 2, title: 'Double Bedroom', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG91YmxlJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 200 },
    { id: 3, title: 'Meeting Room', img: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', price: 300 }
];

const Package = () => {

    const { id } = useParams();

    const singlePackage = services.find(service => service.id == id);

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='text-center mt-5'>
                <img src={singlePackage.img} alt="" />
                <h2 className='mt-2 text-primary'>{singlePackage.title}</h2>
                <div onClick={() => navigate('/checkout')} className="btn btn-primary btn-lg mt-3">Checkout</div>
            </div>
        </div>
    );
};

export default Package;