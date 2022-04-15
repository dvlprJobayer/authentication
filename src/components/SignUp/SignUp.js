import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import Loading from '../Loading/Loading';


const SignUp = () => {

    const [nameErr, setName] = useState('');
    const [emailErr, setEmail] = useState('');
    const [passwordErr, setPassword] = useState('');
    const [confirmPasswordErr, setConfirmPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = event => {
        event.preventDefault();

        const nameInput = event.target.name.value;
        const emailInput = event.target.email.value;
        const passwordInput = event.target.password.value;
        const confirmPasswordInput = event.target.confirmPassword.value;

        // name validation

        if (nameInput === '') {
            setName('Name is required');
        } else {
            setName('');
        }

        // Email Validation
        if (emailInput === '') {
            setEmail('Email is required')
        } else if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail('')
        } else {
            setEmail('Invalid Email')
        }

        // Password Validation
        if (passwordInput === '') {
            setPassword('Password is required');
        } else if (/(?=.*?[0-9])/.test(passwordInput)) {
            setPassword('');
        } else {
            setPassword('Invalid Password');
        }

        // Confirm Password Validation
        if (confirmPasswordInput === '') {
            setConfirmPassword('Confirm Password is required');
        } else if (confirmPasswordInput === passwordInput) {
            setConfirmPassword('');
        } else {
            setConfirmPassword('Password didn\'t match');
        }


        // Create User
        if (!nameErr && !emailErr && !passwordErr && !confirmPasswordErr) {
            createUserWithEmailAndPassword(emailInput, passwordInput);
        }

    }

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    if (loading) {
        <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='card w-50 mx-auto mt-5 p-5 shadow'>
            <h1 className='fw-normal text-center text-primary'>Sign Up</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className='form-label fs-5' htmlFor="name">Name</label>
                    <input className='form-control fs-5' type="text" name='name' />
                    {nameErr && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {nameErr}</p>}
                </div>
                <div className="mb-3">
                    <label className='form-label fs-5' htmlFor="email">Email</label>
                    <input className='form-control fs-5' type="email" name='email' />
                    {emailErr && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailErr}</p>}
                </div>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="password">Password</label>
                    <input className='form-control fs-5' type="password" name='password' />
                    {passwordErr && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {passwordErr}</p>}
                </div>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="confirmPassword">Confirm Password</label>
                    <input className='form-control fs-5' type="password" name='confirmPassword' />
                    {confirmPasswordErr && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {confirmPasswordErr}</p>}
                </div>
                <input className='btn btn-primary w-100 btn-lg fs-4' type="submit" value="Sign Up" />
            </form>
            {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
            <p className='mt-2 fs-5 fw-light text-center'>Already have an account? <Link to='/login'>Login</Link></p>
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className='bg-primary' style={{ height: '1px', width: '150px' }}></div>
                <div className='text-primary mx-2 mb-1'>or</div>
                <div className='bg-primary' style={{ height: '1px', width: '150px' }}></div>
            </div>
            <button className='btn btn-outline-primary btn-lg w-100 fs-4 mb-4 d-flex align-items-center justify-content-center'><FcGoogle /> <p style={{ width: '95%' }} className='mb-1'>Continue with Google</p></button>
            <button className='btn btn-outline-primary btn-lg w-100 fs-4 d-flex align-items-center justify-content-center'><FaTwitter /> <p style={{ width: '95%' }} className='mb-1'>Continue with Twitter</p></button>
        </div>
    );
};

export default SignUp;