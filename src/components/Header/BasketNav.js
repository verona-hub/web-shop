import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
// Cart logo
import cartLogo from '../../img/shopping-cart.png';
import cartLogoFull from '../../img/shopping-cart-full.png';
// Context
import { MyContext } from '../../Context/MyContext';


const BasketNav = () => {
    const navigate = useNavigate();

    const { cartState } = useContext(MyContext);
    const cartEmpty = cartState.length === 0;
    const logo = cartEmpty ? cartLogo : cartLogoFull;

    return (
        <section
            className='BasketNav'
            onClick={ () => navigate('/basket') }
        >
            <img src={logo} alt='shopping cart'/>
        </section>
    );
};


export default BasketNav;
