import React, { useContext } from 'react';
// Context
import { MyContext } from "../../Context/MyContext";


const Item = ({ item }) => {

    const { addToBasket } = useContext(MyContext);

    return (
        <div className='Item'>
            <a href={ item.image }>
                <img src={ item.image } alt='product'/>
            </a>
            <h2> { item.name } </h2>
            <h4> &euro;{ item.price } </h4>
            <button onClick={ () => addToBasket(item) }> Add to Basket </button>
        </div>
    );
};


export default Item;
