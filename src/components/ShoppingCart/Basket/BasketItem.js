import React, { useContext } from 'react';
import { MyContext } from "../../../Context/MyContext";


const BasketItem = ({ item }) => {

// State
    const {
        addToBasket, reduceItem, removeItem,
    } = useContext(MyContext);

    return (
        <div className='order-item'>
            <div className='image-wrapper'>
                <img src={ item.image } alt='product'/>
            </div>
            <div className='details'>
                <h3> { item.name } </h3>
                <h4> &euro;{ item.price }</h4>
            </div>
            <div className='buttons-wrapper'>
                <h4> Quantity:{ item.quantity } </h4>
                <button onClick={ () => reduceItem(item) }> -</button>
                <button onClick={ () => addToBasket(item) }> +</button>
            </div>
            <div className='remove-item-button'>
                <h3 onClick={ () => removeItem(item) }> Delete </h3>
            </div>
        </div>
    );
};

export default BasketItem;
