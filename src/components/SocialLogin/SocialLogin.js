import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
    }, [user, loading]);

    return (
        <div className='social'>
            <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className='or' style={{ height: '1px', width: '150px' }}></div>
                <div className='or-text mx-2 mb-1'>or</div>
                <div className='or' style={{ height: '1px', width: '150px' }}></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-lg w-100 fs-4 mb-4 d-flex align-items-center justify-content-center'><FcGoogle /> <p style={{ width: '95%' }} className='mb-1'>Continue with Google</p></button>
            <p className='text-danger'>{error && error.message}</p>
        </div>
    );
};

export default SocialLogin;