import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

//authentication
import jwt_decode from'jwt-decode';
import {setAuthToken} from "./actions/setAuthToken";
import {setCurrentUser} from "./actions/authActions";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from "./components/authorisation/Register";
import Login from "./components/authorisation/Login";
import Cart from "./components/cart/Cart";
import ItemPage from "./components/items/ItemPage";
import './App.css';
import Filters from "./components/filters/Filters";

//keeps logged user after refreshing
if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {

    return (
        <Provider store={store}>
            <Router>
              <div className="App">
                  <Navbar/>
                  <Route exact path="/" component={Landing} />
                  <Route path='/register' component={Register}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/cart' component={Cart}/>
                  <Route path='/filters' component={Filters}/>
                  <Route path='/:id' component={ItemPage}/>
                  <Footer/>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
