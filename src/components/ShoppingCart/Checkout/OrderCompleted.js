import React, { useContext } from 'react';
import { MyContext } from '../../../Context/MyContext';


const OrderCompleted = () => {

    const { totalPrice, orderCompleted } = useContext(MyContext);

    console.log(orderCompleted)

    return (
        <div>
            <h2> Thank you for your order </h2>
            <h3> Your order details: </h3>
            { orderCompleted.map(item => (
                <div className='order' key={ item.id }>
                    <div className='image-wrapper'>
                        <img src={ item.image } alt='product'/>
                    </div>
                    <div className='details'>
                        <h3> { item.name } &#40;&euro;{item.price}&#41; </h3>
                        <h4> Quantity ordered: { item.quantity }</h4>
                        <h4> Total price: &euro;{ totalPrice } </h4>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default OrderCompleted;
