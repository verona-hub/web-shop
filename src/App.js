import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Components
import Header from './components/Header/Header';
import Main from './components/Main';


const App = () => {

    const [cartState, setCartState] = useState([]);

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

    const removeItem = (item) => {
        const ifExists = cartState.find(x => x.id === item.id);
        if (ifExists.quantity === 1) {
            setCartState(cartState.filter( x => ( x.id !== item.id )));
        } else {
            setCartState(cartState.map( x => (
                x.id === item.id ? {...ifExists, quantity: ifExists.quantity - 1} : x
            )));
        }
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Header cartState={cartState}  />
                <Main
                    addToCart={ addToCart }
                    cartState={ cartState }
                    removeItem={ removeItem }
                />
            </div>
        </BrowserRouter>
    );
};


export default App;


