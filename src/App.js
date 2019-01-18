import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer.js';
import AboutSmartEvent from './AboutSmartEvent.js'
import Product from './Product.js'
import Partner from './Partner.js'
import {MyProvider} from './Context/FullDataContex.js'
import Header from './Header/Header.js'
import Home from "./Home.js"

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Router>
            <div className="App">
              <Header/>
              <Route path="/" component={Home}/>      
              <Route path='/aboutSmartEvent' component={AboutSmartEvent} />
              <Route path='/product' component={Product} />
              <Route path='/partner' component={Partner} />
              <Route path="/footer" component={Footer}/> 
            </div>
          </Router>
        </div>
      </MyProvider>
    );
  }
}

export default App;
