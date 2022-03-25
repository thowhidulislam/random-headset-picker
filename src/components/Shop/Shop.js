import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;