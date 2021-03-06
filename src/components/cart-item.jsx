import React from 'react';
import './cart-item.css';
const CartItem = ({item: { imageUrl, price, name, quantity }})=> (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
            {quantity}*<small>&#x20B9;</small>{price}</span>
        </div>
    </div>
);
 export default CartItem;