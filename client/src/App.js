import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <p>online-shop :)</p>
          <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
