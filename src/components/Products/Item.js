import React from 'react';


const Item = ({ item, addToCart  }) => {

    return (
        <div className='Item'>
            <a href={ item.image }>
                <img src={ item.image } alt='product'/>
            </a>
            <h2> { item.name } </h2>
            <h4> &euro;{ item.price } </h4>
            <button onClick={ () => addToCart(item) }> Add to cart </button>
        </div>
    );
};


export default Item;
