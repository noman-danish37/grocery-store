import React, { Component } from 'react'
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import CartDropdown from './cart-dropdown';
import CartIcon from './cart-icon';
import { Link } from "react-router-dom";
import {auth} from '../firebase/firebase.utilities'
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { toggleCartHidden } from '../redux/cart.actions';
import { selectCartHidden} from '../redux/cart-selectors';
import { selectCurrentUser} from '../redux/user.selectors';

const Navbar = ({currentUser,hidden}) => (
    <div className="navbar">
        <div className="navbar-logo">
        <Link to="/">
            <img className="gc-logo"  src="https://img.icons8.com/color/48/000000/grocery-store.png"/>
        </Link>
            
        </div>
     
            

        <div className="name">
            <h2>Grocery Hub</h2>
        </div>
       
        <div className="nav-search">
            <input className="nav-search-input" type="text" placeholder="Search for products..." />
            <SearchIcon className="search-icon" />
        </div>
        <div className="nav-header">
            <div className="nav-options-l">
                <span className="nav-option-1">Hello Guest</span>
                {currentUser ? (
                    <div className="option" onClick = {()=> auth.signOut()}>
                    SIGN OUT
                    </div>

                ):(
                    <Link to="/login" >
                <span className="nav-option-2">SignIn</span>
                </Link>
                    
                )}
            
            </div>
            <div className="shop">
                <Link to="/shop">
                    <span><strong>Shop</strong></span>
                </Link>
            </div>
            <div className = "nav-options-r">
               <Link to="/checkout">
               <span className="checkout">Checkout</span>
                </Link>
                  
               </div> 
            
           
        <CartIcon /> 
        </div>
        {
        hidden ? null :  <CartDropdown />
        }
        
    </div>
);
 


   


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Navbar);
