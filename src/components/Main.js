import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes } from "react-router-dom";

// Context
import { MyContext } from '../Context/MyContext';

// Components
import Basket from "./ShoppingCart/Basket/Basket";
import Checkout from './ShoppingCart/Checkout/Checkout';
import Items from "./Products/Items";
import OrderCompleted from './ShoppingCart/Checkout/CheckoutMain/CheckoutForm/OrderCompleted';


const Main = () => {

    // Basket and Checkout state
    const [currentPromotionCode, setCurrentPromotionCode] = useState('');
    const [totalPromotions, setTotalPromotions] = useState([]);
    const [discount20percent, setDiscount20percent] = useState(false);
    const [discount5, setDiscount5] = useState(false);
    const [discount20Eur, setDiscount20Eur] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderCompleted, setOrderCompleted] = useState([]);
    const { cartState, setCartState } = useContext(MyContext);
    const [inputValue, setInputValue] = useState({
        email: "",
        address: "",
        city: '',
        country: '',
        postcode: '',
        name: "",
        surname: "",
        creditCard: ""
    });

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

    // Load the subtotal price from local storage
    useEffect(() => {
        const data = localStorage.getItem('subtotal');
        if(data) {
            setSubtotal(JSON.parse(data));
        }
    }, [setSubtotal]);

    // Save subTotal Price to local storage
    useEffect( () => {
        localStorage.setItem('subtotal', JSON.stringify(subtotal));
    }, [subtotal]);

    // Load the orderCompleted from local storage
    useEffect(() => {
        const data = localStorage.getItem('orderCompleted');
        if(data) {
            setOrderCompleted(JSON.parse(data));
        }
    }, [setOrderCompleted]);

    // Save orderCompleted to local storage
    useEffect( () => {
        localStorage.setItem('inputValue', JSON.stringify(orderCompleted));
    }, [orderCompleted]);


    const addToBasket = (item) => {
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
                orderCompleted, setOrderCompleted,
                inputValue, setInputValue,
                addToBasket, reduceItem, removeItem
            }}>
                <Routes>
                    <Route path='/' element={ <Items /> }/>
                    <Route exact path='basket' element={ <Basket/> }/>
                    <Route exact path='checkout' element={ <Checkout /> }/>
                    <Route exact path='order-completed' element={ <OrderCompleted /> }/>
                </Routes>
            </MyContext.Provider>
        </main>
    );
};


export default Main;