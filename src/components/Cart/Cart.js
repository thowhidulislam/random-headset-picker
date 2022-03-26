import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, getRandomProduct, chooseAgain } = props

    return (
        <div className='cart'>
            <h3 className='cart-title'>Selected Headsets</h3>
            {
                cart.map(product => <div className='added-product-container'>
                    <div className='cart-image-container'>
                        <img className='cart-image' src={product.image} alt="" />
                    </div>
                    <p>{product.name}</p>
                </div>)
            }

            <button onClick={getRandomProduct}>CHOOSE 1 FOR ME</button> <br />
            <button onClick={chooseAgain}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;