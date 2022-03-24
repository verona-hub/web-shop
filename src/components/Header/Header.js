import React, { useContext } from 'react';
import { Link } from "react-router-dom";
// Context
import { MyContext } from '../../Context/MyContext';
// Components
import BasketNav from './BasketNav';


const Header = () => {

    const { cartState } = useContext(MyContext);

    return (
        <MyContext.Provider value={{
            cartState
        }}>
            <header className='Header'>
                <Link to='/' className='Link'>
                    <h1> Web shop assignment </h1>
                </Link>

                <Link to='/basket' className='Link'>
                    <BasketNav />
                </Link>
            </header>
        </MyContext.Provider>
    );
};

export default Header;
