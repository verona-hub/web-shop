import React, { useContext, useEffect } from 'react';
// Context
import { MyContext } from '../../Context/MyContext';

const Checkout = () => {

    // State
    const {
        currentPromotionCode, setCurrentPromotionCode,
        totalPromotions, setTotalPromotions,
        discount20percent, setDiscount20percent,
        discount5, setDiscount5,
        discount20Eur, setDiscount20Eur,
        subtotal,
        totalPrice, setTotalPrice
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


    let disc5 = 0;
    let disc20per = 0;
    let disc20eur = 0;

    const applyPromotion = () => {

        let discountAmount = 0;
        let currentDiscount = 0;

        // 20% off final cost cannot be used in conjunction with other codes
        const cannotBeUsedInConjunction = !discount20percent && !discount5 && !discount20Eur;

        // 5% off final cost can be used in conjunction with other codes
        if(!discount5 && !discount20percent && currentPromotionCode === '5%OFF'){
            setDiscount5(true);
            discountAmount = 0.05;
            currentDiscount = disc5 = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
        }

        // 20 EUR off final cost can be used in conjunction with other codes
        if(!discount20Eur && !discount20percent && currentPromotionCode === '20EUROFF') {
            setDiscount20Eur(true);
            discountAmount = disc20eur = 20;

            setTotalPromotions([...totalPromotions, Number(discountAmount)]);
        }

        if(cannotBeUsedInConjunction && currentPromotionCode === '20%OFF') {
            setDiscount20percent(true);
            discountAmount = 0.2;
            currentDiscount = disc20per = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
        }
        setCurrentPromotionCode('');
    };

    const removePromotion = () => {

        if(discount20percent){
            setDiscount20percent(false);
            setTotalPromotions([...totalPromotions, reducePromotionAmount ]);
        }
        if(discount5){
            setDiscount5(false);
            setTotalPromotions([...totalPromotions, reducePromotionAmount ]);
        }
        if(discount20Eur){
            setDiscount20Eur(false);
            setTotalPromotions([...totalPromotions, reducePromotionAmount ]);
        }
    };

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
                { discount20percent && (
                    <div>
                        <h3> Applied discount: 20% Off </h3>
                        <h3 onClick={ removePromotion }> X </h3>
                    </div> )
                }
                { discount5 && (
                    <div>
                        <h3> Applied discount: 5% Off </h3>
                        <h3 onClick={ removePromotion }> X </h3>
                    </div> )
                }
                { discount20Eur && (
                    <div>
                        <h3> Applied discount: 20 EUR Off </h3>
                        <h3 onClick={ removePromotion }> X </h3>
                    </div>)
                }
                <h3> Total: &euro;{ totalPrice.toFixed(2) } </h3>
                <button> Buy </button>
            </div>
        </div>
    );
};


export default Checkout;
