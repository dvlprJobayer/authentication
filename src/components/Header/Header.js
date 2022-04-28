import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/about'>About</NavLink>
                {
                    user ?
                        <button onClick={() => signOut(auth)}>Sign out</button> :
                        <NavLink to='/login'>Login</NavLink>
                }
            </nav>
        </header>
    );
};

export default Header;