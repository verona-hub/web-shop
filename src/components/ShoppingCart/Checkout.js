import React, { useContext } from 'react';
import { MyContext } from '../../Context/MyContext';

const Checkout = ({ cartState }) => {

    const {currentPromotionCode, setCurrentPromotionCode,
        activatedPromotionCode, setActivatedPromotionCode,
        discount20, setDiscount20,
        discount5, setDiscount5,
        discount20Eur, setDiscount20Eur} = useContext(MyContext);

    // The promotion amount is a sum of all promotion codes applied
    const promotionAmount = activatedPromotionCode.reduce( (acc, curr) => acc + curr, 0);

    const promotionCodeExists = activatedPromotionCode.length > 0;

    const onPromoChange = e => {
        setCurrentPromotionCode(e.target.value);
    };

    const applyPromotion = () => {
        let discountAmount = 0;
        let totalDiscount = 0;

        if(currentPromotionCode === '20%OFF') {
            discountAmount = 0.2;
            setDiscount20(true);

            // let discount = subtotal * discountAmount;

            // totalDiscount = subtotal * discountAmount;
            console.log(`totalDiscount: ${totalDiscount}`)
            setActivatedPromotionCode([...activatedPromotionCode, Number(totalDiscount)]);
        }

        if(currentPromotionCode === '5%OFF'){
            discountAmount = 0.05;
            setDiscount5(true);

            // totalDiscount = subtotal * discountAmount;
            setActivatedPromotionCode([...activatedPromotionCode, Number(totalDiscount)]);
        }

        if(currentPromotionCode === '20EUROFF') {
            discountAmount = 20;
            setDiscount20Eur(true);

            // let discount = subtotal - discountAmount;

            // totalDiscount = subtotal - discount;
            setActivatedPromotionCode([...activatedPromotionCode, Number(totalDiscount)]);
        }

        setCurrentPromotionCode('');
    };

    console.log(`activatedPromotionCode: ${activatedPromotionCode}`);
    console.log(`promotionAmount: ${promotionAmount}`)

    return (
        <div className='Checkout'>
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
                    <button className='discount-button'> Apply </button>
                    <button onClick={ applyPromotion } className='discount-button'> Apply</button>
                </div>
            </div>

            <div className="order-summary">
                <h1> Order Summary </h1>
                { discount20 && <h3> Applied discount: 20% Off </h3> }
                { discount5 && <h3> Applied discount: 5% Off </h3> }
                { discount20Eur && <h3> Applied discount: 20 EUR Off </h3> }
            </div>
        </div>
    );
};


export default Checkout;
