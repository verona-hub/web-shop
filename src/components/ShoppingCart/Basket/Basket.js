import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
// Context
import { MyContext } from '../../../Context/MyContext';
// Components
import BasketDiscount from "./BasketDiscount";
import BasketSummary from "./BasketSummary";

const Basket = () => {

    // State
    const {
        currentPromotionCode, setCurrentPromotionCode,
        totalPromotions, setTotalPromotions,
        discount20percent, setDiscount20percent,
        discount5, setDiscount5,
        discount20Eur, setDiscount20Eur,
        cartState, setCartState,
        subtotal, setSubtotal,
        addToCart, reduceItem, removeItem
    } = useContext(MyContext);

    const navigate = useNavigate();
    const cartIsEmpty = cartState.length === 0;

    useEffect( () => {
        // Subtotal is a sum of all items inside the basket multiplied by the quantity
        setSubtotal(cartState.reduce( (acc, item) => acc + (item.price * item.quantity), 0));
    }, [cartState, setSubtotal]);

    const onCheckout = () => {
        setSubtotal(subtotal);
        navigate('/checkout');
    };

    // The promotion amount is a sum of all promotion codes applied
    const promoRef = useRef(null);
    let promotionAmount = promoRef.current;

    useEffect(() => {
        promoRef.current = totalPromotions.reduce( (acc, curr) => acc + curr, 0);
    }, [totalPromotions])

    const reduceRef = useRef(null);
    let reducePromotionAmount = reduceRef.current;
    useEffect(() => {
        reduceRef.current = totalPromotions.reduce( (acc, curr) => acc - curr, 0);
    },[totalPromotions])
    // let promotionAmount = totalPromotions.reduce( (acc, curr) => acc + curr, 0);
    // let reducePromotionAmount = totalPromotions.reduce( (acc, curr) => acc - curr, 0);

    const count = useRef(0);
    let totalPrice = count.current;

    useEffect(() => {
        count.current = subtotal - promotionAmount;
    });

    // The total price
    // useEffect(() => {
    //     setTotalPrice(subtotal - promotionAmount);
    // }, [setTotalPrice, subtotal, promotionAmount]);
    

    const onPromoChange = e => {
        setCurrentPromotionCode(e.target.value);
    };

    const applyPromotion = () => {

        let discountAmount = 0;
        let currentDiscount = 0;

        // 20% off final cost cannot be used in conjunction with other codes
        const cannotBeUsedInConjunction = !discount20percent && !discount5 && !discount20Eur;

        // 5% off final cost can be used in conjunction with other codes
        if(!discount5 && !discount20percent && currentPromotionCode === '5%OFF'){
            setDiscount5(true);
            discountAmount = 0.05;
            currentDiscount = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
        }

        // 20 EUR off final cost can be used in conjunction with other codes
        if(!discount20Eur && !discount20percent && currentPromotionCode === '20EUROFF') {
            setDiscount20Eur(true);
            discountAmount = 20;

            setTotalPromotions([...totalPromotions, Number(discountAmount)]);
        }

        if(cannotBeUsedInConjunction && currentPromotionCode === '20%OFF') {
            setDiscount20percent(true);
            discountAmount = 0.2;
            currentDiscount = subtotal * discountAmount;

            setTotalPromotions([...totalPromotions, Number(currentDiscount)]);
        }
        setCurrentPromotionCode('');
    };

    const removePromotion = () => {

        // Disable the promotions
        discount20percent && setDiscount20percent(false);
        discount5 && setDiscount5(false);
        discount20Eur && setDiscount20Eur(false);

        // Remove the discounted amount from the total price
        setTotalPromotions([...totalPromotions, reducePromotionAmount ]);
    };

    return (
        <section className='Basket'>
            <MyContext.Provider value={{ currentPromotionCode, setCurrentPromotionCode,
                totalPromotions, setTotalPromotions,
                discount20percent, setDiscount20percent,
                discount5, setDiscount5,
                discount20Eur, setDiscount20Eur,
                cartState, setCartState,
                subtotal, setSubtotal,
                totalPrice,
                addToCart, reduceItem, removeItem, applyPromotion, removePromotion, onPromoChange
            }}>
                <div className='order-title'>
                    <h1> Your cart </h1>
                </div>

                { cartIsEmpty && (
                    <div className='order-empty'>
                        <h3>Your cart is empty</h3>
                    </div> )
                }

                { !cartIsEmpty && (
                    <>
                        <div className='order-info'>
                            <div className='my-orders'>
                                { cartState.map(item => (
                                    <div className='order' key={ item.id }>
                                        <div className='image-wrapper'>
                                            <img src={ item.image } alt='product'/>
                                        </div>
                                        <div className='details'>
                                            <h3> { item.name } </h3>
                                            <h4> &euro;{ item.price }</h4>
                                        </div>
                                        <div className='buttons-wrapper'>
                                            <h4> Quantity:{ item.quantity } </h4>
                                            <button onClick={ () => reduceItem(item) }> - </button>
                                            <button onClick={ () => addToCart(item) }> + </button>
                                        </div>
                                        <div className='remove-button'>
                                            <h3 onClick={ () => removeItem(item) }> X </h3>
                                        </div>
                                    </div> ))
                                }
                            </div>
                        </div>

                        <BasketDiscount/>

                        <BasketSummary />

                        <button onClick={ onCheckout }> Checkout </button>
                    </>
                )}
            </MyContext.Provider>
        </section>
    );
};


export default Basket;
