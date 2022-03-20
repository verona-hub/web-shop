import React, { useState } from 'react';


const Basket = ({ cartState, addToCart, removeItem }) => {

    const [currentPromotionCode, setCurrentPromotionCode] = useState('');
    const [activatedPromotionCode, setActivatedPromotionCode] = useState([]);
    // const [promotionAmount, setPromotionAmount] = useState(0);
    const [promotionCodePresent, setPromotionCodePresent] = useState(false);

    const [discount20, setDiscount20] = useState(false);
    const [discount5, setDiscount5] = useState(false);
    const [discount20Eur, setDiscount20Eur] = useState(false);

    const subtotal = cartState.reduce( (acc, item) => acc + item.price * item.quantity, 0 );
    // let promotionAmount = 0;
    let promotionAmount = activatedPromotionCode.reduce( (acc, curr) => acc + curr, 0);
    const totalPrice = subtotal - promotionAmount;
    // const totalPrice = promotionCodePresent ? subtotal - promotionAmount : subtotal;

    const onPromoChange = e => {
        setCurrentPromotionCode(e.target.value);
    };

    const applyPromotion = () => {
        setPromotionCodePresent(true);
        // setActivatedPromotionCode(currentPromotionCode);

        let amount = 0;
        let total = 0;

        if(currentPromotionCode === '20%OFF') {
            amount = 0.20;
            setDiscount20(true);

            total = subtotal * amount;
            setActivatedPromotionCode([...activatedPromotionCode, total]);
        }

        if(currentPromotionCode === '5%OFF'){
            amount = 0.05;
            setDiscount5(true);

            total = subtotal * amount;
            setActivatedPromotionCode([...activatedPromotionCode, total]);

            // amount = 0.05;
            // total = subtotal * amount;
            //
            // setPromotionAmount(total);
            // setActivatedPromotionCode([...activatedPromotionCode, total]);

        }
        if (currentPromotionCode === '20EUROFF') {
            amount = 20;
            setDiscount20Eur(true);

            total = subtotal - amount;
            setActivatedPromotionCode([...activatedPromotionCode, total]);
            //
            // setPromotionAmount(total);
            // setActivatedPromotionCode([...activatedPromotionCode, total]);
        }

        setCurrentPromotionCode('');
    };

    console.log(activatedPromotionCode);
    console.log(promotionAmount)

    return (
        <section className='Basket'>
            <div className='order-title'>
                <h1> Your cart </h1>
            </div>

            {
                cartState.length === 0 && (
                    <div className='order-empty'>
                        <h3>Your cart is empty</h3>
                    </div>)
            }

            {
                cartState.map( item => (
                    <div className='order-status' key={item.id}>
                        <h3> { item.name } </h3>
                        <h4> { item.price }</h4>
                        <div className='item-quantity-button'>
                            <button onClick={ () => removeItem(item) }> -</button>
                            <button onClick={ () => addToCart(item) }> +</button>
                        </div>
                        <h4> { item.quantity } x ${ item.price.toFixed(2) } </h4>
                        <div className="discount-wrapper">
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
                ))
            }

            {
                cartState.length !== 0 && (
                    <div className="order-summary">
                        <h1> Order Summary </h1>
                        <h3> Subtotal: &euro;{subtotal.toFixed(2)} </h3>
                        { discount20 && <h3> Applied discount: 20% Off </h3>}
                        { discount5 && <h3> Applied discount: 5% Off </h3>}
                        { discount20Eur && <h3> Applied discount: 20 EUR Off </h3>}

                        {/*{ promotionCodePresent &&  (*/}
                        {/*    <h3> Discount applied: { promotionAmount.toFixed(2) } </h3>*/}
                        {/*)}*/}
                        <hr/>
                        <h3> Total: &euro;{
                            totalPrice && totalPrice.toFixed(2)
                        }
                        </h3>
                    </div>
                )
            }
        </section>
    );
};


export default Basket;
