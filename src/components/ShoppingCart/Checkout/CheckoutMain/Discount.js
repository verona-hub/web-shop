import React, { useContext } from 'react';
import { MyContext } from "../../../../Context/MyContext";

const Discount = () => {

    const {onPromoChange, currentPromotionCode, applyPromotion } = useContext(MyContext);

    return (
        <div className="Discount">
            <h3> Gift cards & promotional codes & Vouchers: </h3>
            <input
                id='promotion'
                onChange={ onPromoChange }
                placeholder='Enter discount code'
                type='text'
                value={ currentPromotionCode }
            />
            <button onClick={ applyPromotion } className='discount-button'> Apply </button>
        </div>
    );
};

export default Discount;
