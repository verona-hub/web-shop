import React, { useState }  from 'react';
import { Route, Routes } from "react-router-dom";

// Context
import { MyContext } from '../Context/MyContext';

// Components
import Basket from "./ShoppingCart/Basket";
import Checkout from './ShoppingCart/Checkout';
import Items from "./Products/Items";


const Main = ({ cartState, addToCart, removeItem }) => {

    // Basket state
    const [currentPromotionCode, setCurrentPromotionCode] = useState('');
    const [activatedPromotionCode, setActivatedPromotionCode] = useState([]);
    const [discount20, setDiscount20] = useState(false);
    const [discount5, setDiscount5] = useState(false);
    const [discount20Eur, setDiscount20Eur] = useState(false);


    return (
        <main>
            <MyContext.Provider value={{
                currentPromotionCode, setCurrentPromotionCode,
                activatedPromotionCode, setActivatedPromotionCode,
                discount20, setDiscount20,
                discount5, setDiscount5,
                discount20Eur, setDiscount20Eur
            }}>
                <Routes>
                    <Route
                        path='/' element={
                        <Items
                            addToCart={ addToCart }
                        /> }
                    />
                    <Route
                        exact path='basket' element={
                        <Basket
                            cartState={ cartState }
                            addToCart={ addToCart }
                            removeItem={ removeItem }
                        /> }
                    />
                    <Route
                        exact path='checkout' element={
                        <Checkout
                            cartState={ cartState }
                        />
                    }
                    />
                </Routes>
            </MyContext.Provider>
        </main>
    );
};


export default Main;
