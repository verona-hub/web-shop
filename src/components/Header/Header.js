import React from 'react';
import { Link } from "react-router-dom";
import BasketNav from './BasketNav';


const Header = ({ cartState }) => {
    return (
        <header className='Header'>
            <Link to='/' className='Link'>
                <h1> Web shop assignment </h1>
            </Link>

            <Link to='/basket' className='Link'>
                <BasketNav/>
            </Link>
        </header>
    );
};

export default Header;
