import React, { useContext } from 'react';
// Context
import { MyContext } from '../../../Context/MyContext';

const BasketHeader = () => {

    const { cartIsEmpty } = useContext(MyContext);

    return (
        <div>
            <div className='order-title'>
                <h1> Shopping Basket </h1>
            </div>

            { cartIsEmpty && (
                <div className='order-empty'>
                    <h3>Your cart is empty</h3>
                </div> )
            }
        </div>
    );
};

export default BasketHeader;
