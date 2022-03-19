import React from 'react';


const Basket = ({ cartState, addToCart, removeItem }) => {

    const price = cartState.reduce( (acc, item) => acc + item.price * item.quantity, 0 );
    const promotion20 = price * 0.2;
    const totalPrice = price - promotion20;

    return (
        <div className='Basket'>
            <h1> Basket component </h1>

            {
                cartState.length === 0 && (
                    <div>
                        <h3>Your cart is empty</h3>
                    </div>)
            }

            {
                cartState.map( item => (
                    <div key={item.id}>
                        <h3> { item.name } </h3>
                        <h4> { item.price }</h4>
                        <button onClick={ () => addToCart(item) }> + </button>
                        <button onClick={ () => removeItem(item) }> - </button>
                        <div>
                            { item.quantity } x ${ item.price.toFixed(2) }
                        </div>
                    </div>
                ))
            }

            {
                cartState.length !== 0 && (
                    <div className="summary">
                        <h1> Order Summary </h1>
                        <h3> Promotion: </h3>
                        <h3> Total price: &euro;{totalPrice.toFixed(2)} </h3>
                    </div>

                )
            }

        </div>
    );
};


export default Basket;
