import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// Context
import { MyContext } from '../../../Context/MyContext';
// Components
import BasketHeader from "./BasketHeader";
import BasketMain from "./BasketMain";

const Basket = () => {

    const navigate = useNavigate();

    // State
    const {
        cartState, subtotal, setSubtotal,
        addToBasket, reduceItem, removeItem
    } = useContext(MyContext);

    const cartIsEmpty = cartState.length === 0;

    useEffect( () => {
        // Subtotal is a sum of all items inside the basket multiplied by the quantity
        setSubtotal(cartState.reduce( (acc, item) => acc + (item.price * item.quantity), 0));
    }, [cartState, setSubtotal]);

    const onCheckout = () => {
        setSubtotal(subtotal);
        navigate('/checkout');
    };

    return (
        <section className='Basket'>
            <MyContext.Provider value={{
                cartState, cartIsEmpty, subtotal,
                addToBasket, reduceItem, removeItem, onCheckout
            }}>

                <BasketHeader />
                <BasketMain />

            </MyContext.Provider>
        </section>
    );
};


export default Basket;