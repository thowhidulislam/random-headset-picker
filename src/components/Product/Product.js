import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, id, image } = props.product
    console.log(image)
    return (
        <div className='product'>
            <img src={image} alt="" />

            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price: {price}</p>
            </div>
            <button className='select-button'>Add to Cart</button>
        </div>
    );
};

export default Product;