import React, { useState } from 'react';


const CheckoutForm = () => {

    const [inputValue, setInputValue] = useState({
        email: "",
        address: "",
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
        console.log(' Form submitted! ');
        console.log(inputValue)
        e.preventDefault();
    }

    return (
        <section className='CheckoutForm'>
            <h2> Contact Information: </h2>
            <form onSubmit={ onFormSubmit }>
                <input
                    className='email'
                    id='email'
                    name='email'
                    onChange={ onInputChange }
                    placeholder='Email address'
                    type='email'
                    value={ inputValue.email }
                    required
                />

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
                <div className='credit-card-details'>
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
                <input type='submit'/>
            </form>
        </section>
    );
};

export default CheckoutForm;
