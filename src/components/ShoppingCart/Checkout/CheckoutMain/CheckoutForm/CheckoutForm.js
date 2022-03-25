import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
// Context
import { MyContext } from '../../../../../Context/MyContext';

const CheckoutForm = () => {
    const navigate = useNavigate();
    const { cartState, setCartState, setOrderCompleted } = useContext(MyContext);

    const [inputValue, setInputValue] = useState({
        email: "",
        address: "",
        city: '',
        country: '',
        postcode: '',
        name: "",
        surname: "",
        creditCard: ""
    });

    const onInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
        e.preventDefault();
    };

    const onFormSubmit = e => {
        navigate('/order-completed');
        setOrderCompleted(cartState);
        setCartState([]);
        e.preventDefault();
    }

    return (
        <section className='CheckoutForm'>
            <h2> Contact Information: </h2>
            <form onSubmit={ onFormSubmit }>
                <div className='customer-details'>
                    <input
                        className='name'
                        id='name'
                        name='name'
                        onChange={ onInputChange }
                        placeholder='First Name'
                        type='text'
                        value={ inputValue.name }
                        required
                    />
                    <input
                        className='surname'
                        id='surname'
                        name='surname'
                        onChange={ onInputChange }
                        placeholder='Last Name'
                        type='text'
                        value={ inputValue.surname }
                        required
                    />
                </div>
                <div>
                    <input
                        className='email'
                        id='email'
                        name='email'
                        onChange={ onInputChange }
                        placeholder='Email'
                        type='email'
                        value={ inputValue.email }
                        required
                    />
                </div>
                <div>
                    <input
                        className='creditCard'
                        id='creditCard'
                        name='creditCard'
                        onChange={ onInputChange }
                        placeholder='Credit Card details'
                        type='text'
                        value={ inputValue.creditCard }
                        required
                    />
                </div>

                <div className='customer-address'>
                    <input
                        className='address'
                        id='address'
                        name='address'
                        onChange={ onInputChange }
                        placeholder='Address'
                        type='text'
                        value={ inputValue.address }
                        required
                    />
                    <input
                        className='city'
                        id='city'
                        name='city'
                        onChange={ onInputChange }
                        placeholder='City'
                        type='text'
                        value={ inputValue.city }
                        required
                    />
                </div>
                <div>
                    <input
                        className='country'
                        id='country'
                        name='country'
                        onChange={ onInputChange }
                        placeholder='Country'
                        type='text'
                        value={ inputValue.country }
                        required
                    />
                    <input
                        className='postcode'
                        id='postcode'
                        name='postcode'
                        onChange={ onInputChange }
                        placeholder='Postcode'
                        type='text'
                        value={ inputValue.postcode }
                        required
                    />
                </div>
                <div className="buy-wrapper">
                    <input
                        className='button buy'
                        type='submit'
                        value='Buy Now'
                    />
                </div>
            </form>
        </section>
    );
};

export default CheckoutForm;
