import React from 'react';
import { useNavigate } from "react-router-dom";


const Basket = ({ cartState, addToCart, removeItem }) => {
    const navigate = useNavigate();

    const cartIsEmpty = cartState.length === 0;

    // Subtotal is a sum of all items inside the basket multiplied by the quantity
    const subtotal = cartState.reduce( (acc, item) => acc + (item.price * item.quantity), 0);

    let totalPrice = subtotal;

    return (
        <section className='Basket'>
            <div className='order-title'>
                <h1> Your cart </h1>
            </div>

            { cartIsEmpty && (
                <div className='order-empty'>
                    <h3>Your cart is empty</h3>
                </div>)
            }

            { !cartIsEmpty && (
                <>
                    <div className='order-info'>
                        <div className='my-orders'>
                            { cartState.map(item => (
                                <div className='order' key={ item.id }>
                                    <div className='image-wrapper'>
                                        <img src={ item.image } alt='product'/>
                                    </div>
                                    <div className='details'>
                                        <h3> { item.name } </h3>
                                        <h4> &euro;{ item.price }</h4>
                                    </div>
                                    <div className='buttons-wrapper'>
                                        <h4> Quantity:{ item.quantity } </h4>
                                        <button onClick={ () => removeItem(item) }> -</button>
                                        <button onClick={ () => addToCart(item) }> +</button>
                                    </div>
                                </div> ))
                            }
                        </div>
                    </div>

                    <div className="order-summary">
                        <h1> Order Summary </h1>
                        <h3> Subtotal: &euro;{ subtotal.toFixed(2) } </h3>
                        <hr/>
                        <h3> Total: &euro;{ totalPrice.toFixed(2) }
                        </h3>
                    </div>
                    <button onClick={ () => navigate('/checkout') }> Checkout</button>
                </>
            )}
        </section>
    );
};


export default Basket;
