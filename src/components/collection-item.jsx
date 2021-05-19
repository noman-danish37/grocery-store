import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './custom-button';
import { addItem } from '../redux/cart.actions';

import './collection-item.css';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, weight } = item;

  return (
    <div className='collection-item'>
    <img className="image" src={imageUrl} />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>
                    <small className="rupee">&#x20B9;</small>
                    <strong>{price}</strong>
                    <small>{weight}</small>
        </span>
        
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);