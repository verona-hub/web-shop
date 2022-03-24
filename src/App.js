import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { MyContext } from './Context/MyContext';

// Components
import Header from './components/Header/Header';
import Main from './components/Main';


const App = () => {

    const [cartState, setCartState] = useState([]);

    return (
        <BrowserRouter>
            <MyContext.Provider value={{
                cartState, setCartState,
            }}>
                <div className="App">
                    <Header />
                    <Main />
                </div>
            </MyContext.Provider>
        </BrowserRouter>
    );
};


export default App;


