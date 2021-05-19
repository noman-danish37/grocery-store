import { Link } from '@material-ui/core';
import React from 'react';
import './cart-dropdown.css';
import { connect } from 'react-redux';
import {selectCartItems} from '../redux/cart-selectors';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../redux/cart.actions.js';

import CustomButton from './custom-button';
import CartItem from './cart-item';

const CartDropdown = ({ cartItems, history, dispatch})=> (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map(cartItem =>(
                 <CartItem key={cartItem.id} item={cartItem} />
                 ))
            ):(
                <span className='empty-message'>Your cart is empty</span>
            )
            }
        </div>
        <button  onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden()); }}>
        
        GO TO CHECKOUT

       
       
        </button>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));