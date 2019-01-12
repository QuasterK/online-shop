import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from "./components/authorisation/Register";
import Login from "./components/authorisation/Login";
import './App.css';

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
                  <Footer/>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
