import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, id, image } = props.product
    console.log(image)
    return (
        <div className='product'>
            <img src={image} alt="" />

            <div>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Product;