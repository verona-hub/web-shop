import React, { useContext} from 'react';
import { MyContext } from "../../../../Context/MyContext";


const CheckoutSummary = () => {

    // State and functions
    const {
        discount20percent,
        discount5,
        discount20Eur,
        subtotal,
        totalPrice,
        removePromotion
    } = useContext(MyContext);

    return (
        <div className="CheckoutSummary">
            <h1> Order Summary: </h1>
            <h4> Subtotal: &euro;{ subtotal.toFixed(2) } </h4>
            { discount20percent && ( <h4> Applied discount: 20% Off </h4> )}
            { discount5 && ( <h4> Applied discount: 5% Off </h4> )}
            { discount20Eur && ( <h4> Applied discount: 20 EUR Off </h4> )}
            {(discount20percent || discount5 || discount20Eur) && (
                <h4 className="remove-discount" onClick={ removePromotion }> (X) Remove discount </h4>
            )}
            <h2> Total to pay: &euro;{ totalPrice.toFixed(2) } </h2>
        </div>
    );
};

export default CheckoutSummary;