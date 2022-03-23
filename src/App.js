import React, { useContext } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { MyContext } from './Context/MyContext';

// Components
import Header from './components/Header/Header';
import Main from './components/Main';


const App = () => {

    const {
        cartState, setCartState,
        addToCart, reduceItem
    } = useContext(MyContext);

    return (
        <BrowserRouter>
            <div className="App">
                <MyContext.Provider value={ {
                    cartState, setCartState,
                    addToCart, reduceItem
                } }>
                    <Header cartState={ cartState }/>
                    <Main
                        addToCart={ addToCart }
                        cartState={ cartState }
                        reduceItem={ reduceItem }
                    />
                </MyContext.Provider>
            </div>
        </BrowserRouter>
    );
};


export default App;


