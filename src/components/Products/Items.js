import React from 'react';


// Components
import ItemsInfo from './ItemsInfo';


const Items = () => {

    const addToCart = () => {
        console.log('Added to cart')
    };

    return (
        <div className='Items'>
            {
                ItemsInfo.map(item => (
                    <div className='Item' key={item.id}>
                        <img src={ item.image } alt='product'/>
                        <h2> { item.name } </h2>
                        <h4> &euro;{ item.price } </h4>
                        <button onClick={addToCart} > Add to cart </button>
                    </div>
                ))
            }
        </div>
    );
};


export default Items;
