import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    // const [randomPick, setRandomPick] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (exists) {
            alert('Oops!! You already have the same product in the cart.')
        }
        else if (cart.length >= 4) {
            alert('Product selection limit exceeded.')
        }
        else {
            const newCart = [...cart, selectedProduct]
            setCart(newCart)
        }
    }


    // getRandomProduct()

    const chooseAgain = () => {
        setCart([])
    }

    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} chooseAgain={chooseAgain} ></Cart>
                </div>
            </div>
            <div className='article-container'>
                <Article></Article>
            </div>
        </div>
    );
};

export default Shop;