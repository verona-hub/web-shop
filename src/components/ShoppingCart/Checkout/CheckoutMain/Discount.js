import React, { useContext } from 'react';
import { MyContext } from "../../../../Context/MyContext";

const Discount = () => {

    const {onPromoChange, currentPromotionCode, applyPromotion } = useContext(MyContext);

    return (
        <div className="Discount">
            <input
                id='promotion'
                onChange={ onPromoChange }
                placeholder='Discount code'
                type='text'
                value={ currentPromotionCode }
            />
            <button onClick={ applyPromotion } className='discount-button'> Apply </button>
        </div>
    );
};

export default Discount;
