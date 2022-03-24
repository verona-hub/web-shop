import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
// Context
import { MyContext } from '../../../Context/MyContext';


const BasketHeader = () => {
    const navigate = useNavigate();
    const { cartIsEmpty } = useContext(MyContext);
    const headerStyle = cartIsEmpty ? 'BasketHeader empty' : 'BasketHeader full';

    return (
        <div className={ headerStyle }>
            <h1> Shopping Basket </h1>

            { cartIsEmpty && (
                <h3 className='order-empty'>Your shopping cart is empty.</h3>
            )}

            { cartIsEmpty && (
                <div>
                    <button onClick={ () => navigate('/') }> Go to Homepage</button>
                </div>
            )}
        </div>
    );
};

export default BasketHeader;
