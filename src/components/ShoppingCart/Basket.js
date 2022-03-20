import React, { useState } from 'react';


const Basket = ({ cartState, addToCart, removeItem }) => {

    // Basket state
    const [currentPromotionCode, setCurrentPromotionCode] = useState('');
    const [activatedPromotionCode, setActivatedPromotionCode] = useState([]);
    const [discount20, setDiscount20] = useState(false);
    const [discount5, setDiscount5] = useState(false);
    const [discount20Eur, setDiscount20Eur] = useState(false);

    const cartIsEmpty = cartState.length === 0;

    // The promotion amount is a sum of all promotion codes applied
    const promotionAmount = activatedPromotionCode.reduce( (acc, curr) => acc + curr, 0);
    // Subtotal is a sum of all items inside the basket multiplied by the quantity
    const subtotal = cartState.reduce( (acc, item) => acc + (item.price * item.quantity), 0);

    const promotionCodeExists = activatedPromotionCode.length > 0;
    let totalPrice = promotionCodeExists ? subtotal - Number(promotionAmount) : subtotal;

    const onPromoChange = e => {
        setCurrentPromotionCode(e.target.value);
    };

    const applyPromotion = () => {

        let discountAmount = 0;
        let totalDiscount = 0;

        if(currentPromotionCode === '20%OFF') {
            discountAmount = 0.2;
            setDiscount20(true);

            // let discount = subtotal * discountAmount;

            totalDiscount = subtotal * discountAmount;
            console.log(`totalDiscount: ${totalDiscount}`)
            setActivatedPromotionCode([...activatedPromotionCode, Number(totalDiscount)]);
        }

        if(currentPromotionCode === '5%OFF'){
            discountAmount = 0.05;
            setDiscount5(true);

            totalDiscount = subtotal * discountAmount;
            setActivatedPromotionCode([...activatedPromotionCode, Number(totalDiscount)]);
        }

        if(currentPromotionCode === '20EUROFF') {
            discountAmount = 20;
            setDiscount20Eur(true);

            let discount = subtotal - discountAmount;

            totalDiscount = subtotal - discount;
            setActivatedPromotionCode([...activatedPromotionCode, Number(totalDiscount)]);
        }

        setCurrentPromotionCode('');
    };

    console.log(`activatedPromotionCode: ${activatedPromotionCode}`);
    console.log(`promotionAmount: ${promotionAmount}`)

    return (
        <section className='Basket'>
            <div className='order-title'>
                <h1> Your cart </h1>
            </div>

            { cartIsEmpty && (
                <div className='order-empty'>
                    <h3>Your cart is empty</h3>
                </div>)
            }

            { !cartIsEmpty && (
                <div className='order-header'>
                    <h2> Product </h2>
                    <h2> Price </h2>
                    <h2> Quantity </h2>
                    <h2> Total </h2>
                </div>
            )}

            { cartState.map( item => (
                <div className='order-status' key={item.id}>
                    <div>
                        <h3> { item.name } </h3>
                    </div>
                    <img src={ item.image } alt='product'/>
                    <h4> { item.price }</h4>
                    <h4> { item.quantity } </h4>
                    <div className='buttons-wrapper'>
                        <button onClick={ () => removeItem(item) }> - </button>
                        <button onClick={ () => addToCart(item) }> + </button>
                    </div>
                </div>
            ))
            }

            { !cartIsEmpty && (
                <div className="discount-wrapper">
                    <h3>20%OFF 5%OFF 20EUROFF</h3>
                    <input
                        id='promotion'
                        onChange={ onPromoChange }
                        placeholder='Discount code'
                        type='text'
                        value={ currentPromotionCode }
                    />
                    <button onClick={ applyPromotion } className='discount-button'> Apply</button>
                </div>
            )}

            { cartState.length !== 0 && (
                <div className="order-summary">
                    <h1> Order Summary </h1>
                    <h3> Subtotal: &euro;{subtotal.toFixed(2)} </h3>
                    { discount20 && <h3> Applied discount: 20% Off </h3>}
                    { discount5 && <h3> Applied discount: 5% Off </h3>}
                    { discount20Eur && <h3> Applied discount: 20 EUR Off </h3>}

                    <hr/>
                    <h3> Total: &euro;{ totalPrice.toFixed(2) }
                    </h3>
                </div>
            )
            }
        </section>
    );
};


export default Basket;
