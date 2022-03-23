import React, { useContext} from 'react';
import { MyContext } from "../../../Context/MyContext";


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
            <h1> Order Summary </h1>
            <h3> Subtotal: &euro;{ subtotal.toFixed(2) } </h3>
            { discount20percent && (
                <div>
                    <h3> Applied discount: 20% Off </h3>

                </div> )
            }
            { discount5 && (
                <div>
                    <h3> Applied discount: 5% Off </h3>
                </div> )
            }
            { discount20Eur && (
                <div>
                    <h3> Applied discount: 20 EUR Off </h3>
                </div>)
            }
            {(discount20percent || discount5 || discount20Eur) && (
                <button onClick={ removePromotion }> Remove discount code </button>
            )}

            <h3> Total: &euro;{ totalPrice.toFixed(2) } </h3>
            <button> Buy </button>
        </div>
    );
};

export default CheckoutSummary;
