import React from 'react';
import './RandomPick.css'

const RandomPick = ({ randomProduct }) => {

    return (
        <div>
            <img className='random-image' src={randomProduct.image} alt="" />
            <h4>{randomProduct.name}</h4>
        </div>
    );
};

export default RandomPick;