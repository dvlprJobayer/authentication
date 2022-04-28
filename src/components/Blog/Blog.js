import React from 'react';

const Blog = () => {
    return (
        <div className='text-center my-4 container'>
            <h1 className='mt-3 fw-normal' style={{ color: '#83b735' }}>Difference between authorization and authentication.</h1>
            <p className="fs-5">
                Understand Difference between authorization and authentication. first need to understand what is authentication? and what is authorization? let's answer the first question what is authentication? authentication is process to verify a user. suppose you are visited a web application and the website ask you who are you? it's mean what is your email or username and what is your password? when you given your information. The web application check the information correct or wrong. This process called authentication. Now move on to the next question what is authorization? basically authorization means given permission to access specific web application data. authorization comes after to authentication. when authentication process is done after start the authorization process. based on user information the web application check who the user is and the user which part can access. This process called authorization.
            </p>
            <h1 className='mt-3 fw-normal' style={{ color: '#83b735' }}>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className="fs-5">
                Firebase provided many services.you can use firebase based on what you need.There are many authentications service providers out there but firebase is a very popular.Many websites use the firebase authentication service to authenticate the user.Firebase platform developed by Google that's why it's trusted and more secure rather than other platforms. That's why I am using firebase. There are many other options to have implement authentication except firebase. some of the options are mentioned below. <br />
                1. Okta. <br />
                2. JumpCloud. <br />
                3. Auth0. <br />
                4. Rippling <br />
                5. Microsoft Azure Active Directory.
            </p>
            <h1 className='mt-3 fw-normal' style={{ color: '#83b735' }}>What other services does firebase provide other than authentication?</h1>
            <p className="fs-5">
                Firebase is a service-based company which is provided multiple services. except authentication firebase provided many useful services. some of the services mentioned below:- <br />
                1. Cloud Firestore. <br />
                2. Cloud Functions. <br />
                3. Authentication. <br />
                4. Hosting. <br />
                5. Cloud Storage. <br />
                6. Google Analytics. <br />
                7. Predictions. <br />
                8. Cloud Messaging. <br />
                9. Dynamic Links. <br />
                10. Remote Config. <br />
                Hosting is a useful service that firebase provided. you can host your web application on firebase hosting platform. Google analytics is one of popular service on firebase. using Google analytics you can track your website user activity.
            </p>
        </div>
    );
};

export default Blog;