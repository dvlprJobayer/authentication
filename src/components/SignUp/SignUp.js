import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [userError, setUserError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const emailOnChange = e => {
        const emailInput = e.target.value;
        if (emailInput === '') {
            setUserError({ ...userError, email: 'Email is required' });
            setUserInfo({ ...userInfo, email: '' });
        } else if (/\S+@\S+\.\S+/.test(emailInput)) {
            setUserError({ ...userError, email: '' });
            setUserInfo({ ...userInfo, email: emailInput });
        } else {
            setUserError({ ...userError, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    }

    const passwordOnChange = e => {
        const passwordInput = e.target.value;
        if (passwordInput === '') {
            setUserError({ ...userError, password: 'Password is required' });
            setUserInfo({ ...userInfo, password: '' });
        } else if (/(?=.*?[0-9])/.test(passwordInput)) {
            setUserError({ ...userError, password: '' });
            setUserInfo({ ...userInfo, password: passwordInput });
        } else {
            setUserError({ ...userError, password: 'Invalid Password' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    const confirmPassOnChange = e => {
        const confirmPasswordInput = e.target.value;
        if (confirmPasswordInput === '') {
            setUserError({ ...userError, confirmPassword: 'Confirm Password is required' });
            setUserInfo({ ...userInfo, confirmPassword: '' });
        } else if (confirmPasswordInput === userInfo.password) {
            setUserError({ ...userError, confirmPassword: '' });
            setUserInfo({ ...userInfo, confirmPassword: confirmPasswordInput });
        } else {
            setUserError({ ...userError, confirmPassword: 'Password didn\'t match' });
            setUserInfo({ ...userInfo, confirmPassword: '' });
        }
    }

    const handleRegister = e => {
        e.preventDefault();

        if (userInfo.email && userInfo.password && userInfo.confirmPassword) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
    }

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (loading) {
            <Loading />
        }
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, loading, from, navigate]);

    return (
        <div className='card mx-auto my-5 p-md-5 p-4 shadow form'>
            <h1 className='fw-normal text-center mb-4'>Sign up</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <input onChange={emailOnChange} className='form-control fs-5' placeholder='Your Email' type="email" name='email' />
                    {userError.email && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.email}</p>}
                </div>
                <div className="mb-4">
                    <input onChange={passwordOnChange} className='form-control fs-5' placeholder='Your Password' type="password" name='password' />
                    {userError.password && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.password}</p>}
                </div>
                <div className="mb-4">
                    <input onChange={confirmPassOnChange} className='form-control fs-5' placeholder='Confirm Password' type="password" name='confirmPassword' />
                    {userError.confirmPassword && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.confirmPassword}</p>}
                </div>
                <input className='btn w-100 btn-lg fs-4' type="submit" value="Sign up" />
            </form>
            {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
            <p className='my-2 fs-5 fw-light text-center'>Already have an account? <Link style={{ color: '#83b735' }} to='/login'>Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default SignUp;