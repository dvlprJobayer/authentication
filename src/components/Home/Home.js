import React from 'react';
import Service from '../Service/Service';


const services = [
    { id: 1, title: 'Single Bedroom', img: 'https://images.unsplash.com/photo-1635315891380-f70330a5b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2xlJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 100 },
    { id: 2, title: 'Double Bedroom', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG91YmxlJTIwYmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 200 },
    { id: 3, title: 'Meeting Room', img: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', price: 300 }
]

const Home = () => {
    return (
        <div className='container'>
            <div className='d-flex align-items-center mx-auto mt-5'>
                <div className='col-lg-6'>
                    <h1 className='text-primary'>Hotel Booms</h1>
                    <p className='me-5'>A Dream hotel for new couples see our services and get your favorite package.</p>
                </div>
                <div className='col-lg-6'>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>
            <div className="my-5">
                <h1 className='text-center text-primary mb-4'>Our Packages</h1>
                <div className="row">
                    {
                        services.map(service => <Service service={service} key={service.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;