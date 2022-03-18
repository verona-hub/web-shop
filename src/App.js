import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Items from './components/Products/Items';
import Navbar from './components/Navbar';
import CartContent from "./components/ShoppingCart/CartContent";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path='/' element={ <Items/> } />
                    <Route exact path='cart-content' element={ <CartContent /> } />
                </Routes>
            </div>
        </BrowserRouter>
    );
};


export default App;


