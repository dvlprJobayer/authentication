import React from 'react';


const date = new Date();

const year = date.getFullYear();

const Footer = () => {
    return (
        <div className='text-center py-4' style={{ background: '#83b735' }}>
            <p className='m-0 text-white fs-5'>Copyright &copy; {year} <strong>Jacob Billy</strong></p>
        </div>
    );
};

export default Footer;