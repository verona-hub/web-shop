import React, { useContext } from 'react';
import { MyContext } from "../../../Context/MyContext";

const CheckoutMain = () => {

    const {onPromoChange, currentPromotionCode, applyPromotion } = useContext(MyContext);

    return (
        <div>
            <h1> This is Checkout </h1>

            <div className="discount-wrapper">
                <div>
                    <h3>20%OFF 5%OFF 20EUROFF</h3>
                    <input
                        id='promotion'
                        onChange={ onPromoChange }
                        placeholder='Discount code'
                        type='text'
                        value={ currentPromotionCode }
                    />
                    <button onClick={ applyPromotion } className='discount-button'> Apply</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutMain;
