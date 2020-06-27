import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.component.style.scss';

export default function HeaderComponent(props) {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {false ? (
                <div className='option'>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            </div>
        </div>
    )
}