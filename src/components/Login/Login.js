import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import auth from '../../firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const [userError, setUserError] = useState({
        email: '',
        password: ''
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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

    const handleLogin = e => {
        e.preventDefault();

        if (userInfo.email && userInfo.password) {
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
        }
    }

    const resetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success('Sent password on your email', { id: 'reset' });
        }
    }

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (loading || sending) {
            <Loading />
        }
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, loading, from, navigate, sending]);

    return (
        <div className='card mx-auto my-5 p-md-5 p-4 shadow form'>
            <h1 className='fw-normal text-center mb-4'>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <input onChange={emailOnChange} className='form-control fs-5' placeholder='Your Email' type="email" name='email' />
                    {userError.email && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.email}</p>}
                </div>
                <div className="mb-4">
                    <input onChange={passwordOnChange} className='form-control fs-5' placeholder='Your Password' type="password" name='password' />
                    {userError.password && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {userError.password}</p>}
                </div>
                <input className='btn w-100 btn-lg fs-4' type="submit" value="Login" />
            </form>
            {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
            <p className='my-2 fs-5 fw-light text-center'>New to Jacob Billy? <Link style={{ color: '#83b735' }} to='/signup'>Create New Account</Link></p>
            <p className='my-2 fs-5 fw-light text-center'>Forget Password? <span onClick={resetPassword} style={{ color: '#83b735', cursor: 'pointer', textDecoration: 'underline' }} >Reset Password</span></p>
            <SocialLogin />
        </div>
    );
};

export default Login;