import React, { useState } from 'react';
import RandomPick from '../RandomPick/RandomPick';
import './Cart.css'

const Cart = (props) => {
    const { cart, chooseAgain } = props

    const [randomProduct, setRandomProduct] = useState([])
    const getRandomProduct = () => {
        const randomProductNumber = Math.floor(Math.random() * cart.length)
        const newProduct = cart[randomProductNumber]
        setRandomProduct(newProduct)
    }

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
            <RandomPick randomProduct={randomProduct} key={randomProduct.id}></RandomPick>

            <button onClick={getRandomProduct}>CHOOSE 1 FOR ME</button> <br />
            <button onClick={chooseAgain}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;