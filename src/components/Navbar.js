import React from 'react';
import { Link } from "react-router-dom";
import Cart from './ShoppingCart/Cart';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to='/' className='Link'>
                <h1> Web shop assignment </h1>
            </Link>

            <Link to='/cart-content' className='Link'>
                <Cart />
            </Link>


        </div>
    );
};

export default Navbar;
