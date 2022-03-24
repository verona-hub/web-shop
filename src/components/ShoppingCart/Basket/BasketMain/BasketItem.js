import React, { useContext } from 'react';
import { MyContext } from "../../../../Context/MyContext";


const BasketItem = ({ item }) => {

    // State
    const {
        addToBasket, reduceItem, removeItem,
    } = useContext(MyContext);

    return (
        <div className='BasketItem'>
            <div className='image-wrapper'>
                <img src={ item.image } alt='product'/>
            </div>
            <div className='details'>
                <h3> { item.name } </h3>
                <h4>&#40; &euro;{ item.price } &#41;</h4>
            </div>
            <div className='quantity'>
                    <h4> Quantity: { item.quantity } </h4>
                <div className='quantity-buttons'>
                    <button onClick={ () => reduceItem(item) }> -</button>
                    <button onClick={ () => addToBasket(item) }> +</button>
                </div>
            </div>
            <div className='remove-item-button'>
                <h3 onClick={ () => removeItem(item) }> Delete </h3>
            </div>
        </div>
    );
};

export default BasketItem;
