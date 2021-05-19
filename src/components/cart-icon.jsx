import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../redux/cart.actions';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { selectCartItemsCount} from '../redux/cart-selectors';
import './cart-icon.css';
import CartItem from './cart-item';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <AddShoppingCartIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);