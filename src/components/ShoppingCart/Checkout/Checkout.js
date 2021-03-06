import React, { useContext, useEffect } from 'react';
// Context
import { MyContext } from '../../../Context/MyContext';
// Components
import Discount from './CheckoutMain/Discount';
import CheckoutSummary from './CheckoutMain/CheckoutSummary';
import CheckoutForm from './CheckoutMain/CheckoutForm/CheckoutForm';

const Checkout = () => {

    // State
    const {
        currentPromotionCode, setCurrentPromotionCode,
        totalPromotions, setTotalPromotions,
        discount20percent, setDiscount20percent,
        discount5, setDiscount5,
        discount20Eur, setDiscount20Eur,
        cartState, setCartState,
        subtotal, setSubtotal, totalPrice, setTotalPrice,
        orderCompleted, setOrderCompleted,
        inputValue, setInputValue
    } = useContext(MyContext);

    // The promotion amount is a sum of all promotion codes applied
    let promotionAmount = totalPromotions.reduce( (acc, curr) => acc + curr, 0);
    let reducePromotionAmount = totalPromotions.reduce( (acc, curr) => acc - curr, 0);

    // The total price
    useEffect(() => {
        setTotalPrice(subtotal - promotionAmount);
    }, [setTotalPrice, subtotal, promotionAmount]);

    const onPromoChange = e => {
        setCurrentPromotionCode(e.target.value);
    };

    const applyPromotion = () => {

        let discountAmount = 0;
        let currentDiscount = 0;

        // 20% off final cost cannot be used in conjunction with other codes
        const cannotBeUsedInConjunction = !discount20percent && !discount5 && !discount20Eur;

        // 5% off final cost can be used in conjunction with other codes
        if(!discount5 && !discount20percent && currentPromotionCode === '5%OFF'){
            setDiscount5(true);
            discountAmount = 0.05;
            currentDiscount = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
        }

        // 20 EUR off final cost can be used in conjunction with other codes
        if(!discount20Eur && !discount20percent && currentPromotionCode === '20EUROFF') {
            setDiscount20Eur(true);
            discountAmount = 20;

            setTotalPromotions([...totalPromotions, Number(discountAmount)]);
        }

        if(cannotBeUsedInConjunction && currentPromotionCode === '20%OFF') {
            setDiscount20percent(true);
            discountAmount = 0.2;
            currentDiscount = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
        }
        setCurrentPromotionCode('');
    };

    const removePromotion = () => {

        // Disable the promotions
        discount20percent && setDiscount20percent(false);
        discount5 && setDiscount5(false);
        discount20Eur && setDiscount20Eur(false);

        // Remove the discounted amount from the total price
        setTotalPromotions([...totalPromotions, reducePromotionAmount ]);
    };

    return (
        <div className='Checkout'>
            <MyContext.Provider value={{
                cartState, setCartState, discount20percent, discount5, discount20Eur,
                subtotal, setSubtotal, totalPrice, setTotalPrice,
                currentPromotionCode, orderCompleted, setOrderCompleted,
                inputValue, setInputValue,
                applyPromotion, removePromotion, onPromoChange
            }}>

                <div className='discount-summary-wrapper'>
                    <CheckoutSummary/>
                    <Discount/>
                </div>

                <CheckoutForm />

            </MyContext.Provider>
        </div>
    );
};


export default Checkout;