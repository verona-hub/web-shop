import React from 'react';
import cartLogo from '../../img/shopping-cart.png';
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();

    return (
        <section
            className='Cart'
            onClick={ () => navigate('/cart-content') }
        >
            <img src={cartLogo} alt='shopping cart'/>
            <h3 className='text'> Cart </h3>
        </section>
    );
};


export default Cart;
