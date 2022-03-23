import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

// Context
import { MyContext } from '../Context/MyContext';

// Components
import Basket from "./ShoppingCart/Basket";
import Checkout from './ShoppingCart/Checkout/Checkout';
import Items from "./Products/Items";


const Main = () => {

    // Basket and Checkout state
    const [currentPromotionCode, setCurrentPromotionCode] = useState('');
    const [totalPromotions, setTotalPromotions] = useState([]);
    const [discount20percent, setDiscount20percent] = useState(false);
    const [discount5, setDiscount5] = useState(false);
    const [discount20Eur, setDiscount20Eur] = useState(false);
    const [cartState, setCartState] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Load the cart state from local storage
    useEffect(() => {
        const data = localStorage.getItem('cartState');
        if(data) {
            setCartState(JSON.parse(data));
        }
    }, [setCartState]);

    // Save cart state to local storage
    useEffect( () => {
        localStorage.setItem('cartState', JSON.stringify(cartState));
    }, [cartState]);

    const addToCart = (item) => {
        const ifExists = cartState.find(x => x.id === item.id);

        if (ifExists) {
            setCartState(cartState.map( x => (
                x.id === item.id ? {...ifExists, quantity: ifExists.quantity + 1} : x
            )));
        } else {
            setCartState([...cartState, {...item, quantity: 1}]);
        }
    };

    const reduceItem = (item) => {
        const ifExists = cartState.find(x => x.id === item.id);

        if (ifExists.quantity === 1) {
            setCartState(cartState.filter( x => x.id !== item.id ));
        } else {
            setCartState(cartState.map( x => (
                x.id === item.id ? {...ifExists, quantity: ifExists.quantity - 1} : x
            )));
        }
    };

    const removeItem = (item) => {
        const ifExists = cartState.find(x => x.id === item.id);

        if (ifExists.quantity >= 0) {
            setCartState(cartState.filter( x => x.id !== item.id ));
        }
    };

    return (
        <main>
            <MyContext.Provider value={{
                currentPromotionCode, setCurrentPromotionCode,
                totalPromotions, setTotalPromotions,
                discount20percent, setDiscount20percent,
                discount5, setDiscount5,
                discount20Eur, setDiscount20Eur,
                cartState, setCartState,
                subtotal, setSubtotal,
                totalPrice, setTotalPrice,
                addToCart, reduceItem, removeItem
            }}>
                <Routes>
                    <Route path='/' element={ <Items /> }/>
                    <Route exact path='basket' element={ <Basket/> }/>
                    <Route exact path='checkout' element={ <Checkout /> }/>
                </Routes>
            </MyContext.Provider>
        </main>
    );
};


export default Main;
