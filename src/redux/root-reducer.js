import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory.reducer';
import shopReducer from './shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
   
});
export default persistReducer(persistConfig, rootReducer);