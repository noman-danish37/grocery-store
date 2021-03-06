import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INTITIAL_STATE = {
    hidden : true,
    cartItems: []
};

export const cartReducer = (state =INTITIAL_STATE,action)=>{
    console.log(action);
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                };
            case CartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    CartItems: removeItemFromCart(state.cartItems, action.payload)
                };
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
                return{
                    ...state,
                    cartItems: state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id
                    )
                };    
   
            default:
                return state;
    }
}
export default cartReducer;