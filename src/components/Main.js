import React from 'react';
import { Route, Routes } from "react-router-dom";

// Components
import Basket from "./ShoppingCart/Basket";
import Checkout from './ShoppingCart/Checkout';
import Items from "./Products/Items";


const Main = ({ cartState, addToCart, removeItem }) => {
    return (
        <main>
            <Routes>
                <Route path='/' element={
                    <Items
                        addToCart={ addToCart }
                    /> }
                />
                <Route exact path='basket' element={
                    <Basket
                        cartState={ cartState }
                        addToCart={ addToCart }
                        removeItem={ removeItem }
                    /> }
                />
                <Route exact path='checkout' element={
                    <Checkout/>
                }
                />
            </Routes>
        </main>
    );
};


export default Main;
