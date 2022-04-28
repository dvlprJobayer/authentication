import React from 'react';
import about from '../../img/about.jpg';

const About = () => {
    return (
        <div className='text-center my-4 container'>
            <img width={400} src={about} alt="" />
            <h1 className='mt-3 fw-normal'>Name: <span style={{ color: '#83b735' }}>Jobayer Ahammed Patwary</span></h1>
            <p className='fs-5'>Hi, This is Jobayer. I want to become a fullstack web developer. Writing code is my passion. I would like to learn new technology. I work very hard to achieve my goal. To achieve my goal I continue learning new technology. I spend 8 to 10 hours daily learning. I find out my lackings and continue to develop my skill to achieve the goal. I am trying always to be motivated. when I am facing any problem in developing a project I try too hard  to solve this problem.</p>
        </div>
    );
};

export default About;