import React from 'react';
import cartLogo from '../../img/shopping-cart.png';
import { useNavigate } from "react-router-dom";


const BasketNav = ({ cartState }) => {
    const navigate = useNavigate();

    return (
        <section
            className='BasketNav'
            onClick={ () => navigate('/basket') }
        >
            <img src={cartLogo} alt='shopping cart'/>
            <h3 className='text'> BasketNav </h3>
        </section>
    );
};


export default BasketNav;
