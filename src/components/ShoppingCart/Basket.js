import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// Context
import { MyContext } from '../../Context/MyContext';

const Basket = () => {

    // State
    const {
        cartState, addToCart, removeItem,
        subtotal, setSubtotal,
        setTotalPrice
    } = useContext(MyContext);

    const navigate = useNavigate();

    const cartIsEmpty = cartState.length === 0;

    useEffect( () => {
        // Subtotal is a sum of all items inside the basket multiplied by the quantity
        setSubtotal(cartState.reduce( (acc, item) => acc + (item.price * item.quantity), 0));
    }, [cartState, setSubtotal]);

    const onCheckout = () => {
        setTotalPrice(subtotal);
        navigate('/checkout');
    };

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
                    </div>
                    <button onClick={ onCheckout }> Checkout </button>
                </>
            )}
        </section>
    );
};


export default Basket;
