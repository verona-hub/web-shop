import React, { useContext } from 'react';
// Context
import { MyContext } from '../../../../Context/MyContext';


const BasketSummary = () => {

    const { subtotal } = useContext(MyContext);

    return (
        <div className="BasketSummary">
            <h1> Order Summary </h1>
            <h3>
                Subtotal:
                &euro;{ subtotal.toFixed(2) }
            </h3>
        </div>
    );
};


export default BasketSummary;
