import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import auth from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    return (
        <header>
            <nav className='text-center mt-3'>
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <button onClick={() => signOut(auth)}>Sign Out</button> :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </header>
    );
};

export default Header;