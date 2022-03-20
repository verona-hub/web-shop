import React, { useState } from 'react';


const Basket = ({ cartState, addToCart, removeItem }) => {

    const [promotionCode, setPromotionCode] = useState('');
    const [activatedPromotionCode, setActivatedPromotionCode] = useState('');
    const [promotionAmount, setPromotionAmount] = useState(0);
    const [promotionCodePresent, setPromotionCodePresent] = useState(false);

    const subtotal = cartState.reduce( (acc, item) => acc + item.price * item.quantity, 0 );
    // let promotionAmount = 0;
    const totalPrice = promotionCodePresent ? subtotal - promotionAmount : subtotal;

    const onPromoChange = e => {
        setPromotionCode(e.target.value);
    };

    const applyPromotion = () => {
        setPromotionCodePresent(true);
        // setActivatedPromotionCode(promotionCode);

        if(promotionCode === '5%OFF'){
            setPromotionAmount(subtotal * 0.05);
        } else if (promotionCode === '20EUROFF'){

            // setPromotionAmount(promotionAmount - 20);
        }

        setPromotionCode('');
    };

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
                            <input
                                id='promotion'
                                onChange={ onPromoChange }
                                placeholder='Discount code'
                                type='text'
                                value={ promotionCode }
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
                        { promotionCodePresent &&  (
                            <h3> Discount applied: { promotionAmount.toFixed(2) } </h3>
                        )}
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
