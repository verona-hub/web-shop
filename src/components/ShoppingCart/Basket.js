import React from 'react';


const Basket = ({ cartState, addToCart, removeItem }) => {
    console.log(cartState)

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
        </div>
    );
};


export default Basket;
