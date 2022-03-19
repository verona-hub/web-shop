import React, { useState } from 'react';


const Basket = ({ cartState, addToCart, removeItem }) => {

    const [promotionCode, setPromotionCode] = useState('');

    const price = cartState.reduce( (acc, item) => acc + item.price * item.quantity, 0 );
    const promotion20 = price * 0.2;
    const totalPrice = price - promotion20;

    const onPromoChange = e => {
        // e.preventDefault();
        setPromotionCode(e.target.value);

        console.log(promotionCode)
    };


    const addPromo = () => {
        console.log(`Promotion code ${promotionCode} was added`)
        setPromotionCode('');
    };

    return (
        <section className='Basket'>
            <div className='order-title'>
                <h1> Basket component </h1>
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
                        <button onClick={ () => removeItem(item) }> - </button>
                        <button onClick={ () => addToCart(item) }> + </button>
                        <h4> { item.quantity } x ${ item.price.toFixed(2) } </h4>
                        <h4>  </h4>
                        <label htmlFor='promotion'> Promotion code: </label>
                        <input
                            id='promotion'
                            onChange={ onPromoChange }
                            placeholder='Input code here'
                            type='text'
                            value={promotionCode}
                        />
                        <button onClick={ addPromo }> Add </button>

                    </div>
                ))
            }

            {
                cartState.length !== 0 && (
                    <div className="order-summary">
                        <h1> Order Summary </h1>
                        <h3> Order price: &euro;{price.toFixed(2)} </h3>
                        <h3> Promotion amount: </h3>
                        <h3> Total price: </h3>
                    </div>

                )
            }

        </section>
    );
};


export default Basket;
