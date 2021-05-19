import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ShopPage from './components/shop-component';
import MyCart from './components/MyCart';
import SigninSignup from './components/Sign-in-Sign-up';
import HomePage from './components/HomePage';
import { auth, createUserProfileDocument } from './firebase/firebase.utilities';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user.actions';
import {selectCurrentUser} from './redux/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './components/checkout';
import { FooterContainer } from './components/footer';
import About from './components/about';


class App extends React.Component{
 unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });

          console.log(this.state);
        });
      }

      setCurrentUser( userAuth );
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuthAuth();
  }
  
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route  exact path="/" component = { HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path="/mycart" component = { MyCart } />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path= "/About-Us" component= {About} />
          <Route exact path= "/login" render ={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SigninSignup />)}/>
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
 setCurrentUser: user => dispatch(setCurrentUser(user))
});




export default connect(mapStateToProps,mapDispatchToProps)(App);
