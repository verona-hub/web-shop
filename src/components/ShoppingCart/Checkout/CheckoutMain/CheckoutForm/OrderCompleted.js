import React, { useContext } from 'react';
import { MyContext } from '../../../../../Context/MyContext';
import { useNavigate } from "react-router-dom";


const OrderCompleted = () => {

    const navigate = useNavigate();
    const { totalPrice, orderCompleted } = useContext(MyContext);

    return (
        <div className="OrderCompleted">
            { orderCompleted && (
                <div className="OrderCompleted">
                    <h2> Thank you for your order! </h2>
                    <h3> Your order details: </h3>

                    { orderCompleted.map(item => (

                        <div className='BasketItem' key={item.id}>
                            <div className='image-wrapper'>
                                <img src={ item.image } alt='product'/>
                            </div>
                            <div className='details'>
                                <h3> { item.name } </h3>
                                <h4>&#40; &euro;{ item.price } &#41;</h4>
                            </div>
                            <div className='quantity'>
                                <h4> Quantity: { item.quantity } </h4>
                            </div>
                        </div>
                    ))}
                    <h4> Total paid: &euro;{ totalPrice.toFixed(2) } </h4>
                    <button onClick={() => navigate('/')}> Go to Homepage </button>
                </div>
            )}
        </div>
    );
};

export default OrderCompleted;
