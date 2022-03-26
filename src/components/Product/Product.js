import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props
    const { name, price, image } = product
    return (
        <div className='product'>
            <img src={image} alt="" />

            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price: {price}</p>
            </div>
            <button className='cart-btn' onClick={() => handleAddToCart(product)}>
                <p className='cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;