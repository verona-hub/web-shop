import React, { useContext } from 'react';
// Context
import { MyContext } from '../../../Context/MyContext';
// Components
import BasketItem from "./BasketMain/BasketItem";
import BasketSummary from "./BasketMain/BasketSummary";


const BasketMain = () => {

    const {
        cartState, cartIsEmpty, subtotal,
        addToBasket, reduceItem, removeItem, onCheckout
    } = useContext(MyContext);

    return (
        <MyContext.Provider value={{
            cartState, cartIsEmpty, subtotal,
            addToBasket, reduceItem, removeItem, onCheckout
        }}>
            <div className="BasketMain">

                { !cartIsEmpty && (
                    <>
                        <div className='order-info'>
                            <div className='order-items'>
                                { cartState.map(item => (
                                    <BasketItem key={ item.id } item={ item }/>
                                )) }
                            </div>

                            <BasketSummary/>

                        </div>
                        <button onClick={ onCheckout }> Proceed to Checkout</button>
                    </>
                ) }

            </div>
        </MyContext.Provider>
    );
};

export default BasketMain;
