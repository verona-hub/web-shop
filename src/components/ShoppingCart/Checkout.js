import React, { useContext, useState } from 'react';
// Context
import { MyContext } from '../../Context/MyContext';

const Checkout = () => {

    // State
    const {
        currentPromotionCode, setCurrentPromotionCode,
        totalPromotions, setTotalPromotions,
        discount20, setDiscount20,
        discount5, setDiscount5,
        discount20Eur, setDiscount20Eur,
        subtotal, setSubtotal,
        totalPrice, setTotalPrice
    } = useContext(MyContext);

    const [ totals, setTotals ] = useState([]);

    // The promotion amount is a sum of all promotion codes applied
    let promotionAmount = totalPromotions.reduce( (acc, curr) => acc + curr, 0);
    let totalAmount = totals.reduce( (acc, curr) => acc + curr, 0);


    const onPromoChange = e => {
        setCurrentPromotionCode(e.target.value);
    };

    const applyPromotion = () => {
        let discountAmount = 0;
        let currentDiscount = 0;

        if(currentPromotionCode === '20%OFF') {
            setDiscount20(true);
            discountAmount = 0.2;
            currentDiscount = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
            // setTotalPrice(subtotal - promotionAmount);
            // setTotals();
        }

        if(currentPromotionCode === '5%OFF'){
            setDiscount5(true);
            discountAmount = 0.05;
            currentDiscount = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
            // setTotalPrice(subtotal - promotionAmount);
        }

        if(currentPromotionCode === '20EUROFF') {
            setDiscount20Eur(true);
            discountAmount = 20;
            currentDiscount = subtotal - discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
            // setTotalPrice(subtotal - promotionAmount);
        }
        setCurrentPromotionCode('');
    };

    // useEffect( (promotionAmount) => {
    //     setTotalPrice(totalPrice - promotionAmount);
    // }, [totalPrice, setTotalPrice]);

    // console.log(`activatedPromotionCode: ${activatedPromotionCode}`);
    // console.log(`promotionAmount: ${promotionAmount}`)

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
                    <button onClick={ applyPromotion } className='discount-button'> Apply</button>
                </div>
            </div>

            <div className="order-summary">
                <h1> Order Summary </h1>
                <h3> Subtotal: &euro;{ subtotal.toFixed(2) } </h3>
                { discount20 && <h3> Applied discount: 20% Off </h3> }
                { discount5 && <h3> Applied discount: 5% Off </h3> }
                { discount20Eur && <h3> Applied discount: 20 EUR Off </h3> }
                {/*<h3> Total: &euro;{ totals.toFixed(2) } </h3>*/}
            </div>
        </div>
    );
};


export default Checkout;
