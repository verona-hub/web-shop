import React from 'react';
import { Route, Routes } from "react-router-dom";
import Items from "./Products/Items";
import Basket from "./ShoppingCart/Basket";


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
            </Routes>
        </main>
    );
};


export default Main;