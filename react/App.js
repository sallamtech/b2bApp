'use strict'

// Dependencies
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Single from './pages/Single';
import UserLogin from './pages/Login';
import Footer from './pages/Footer';
import UserRegister from './pages/Signup';

import ProductBox from './components/product/ProductBox';
import CategoryBox from './components/product-category/CategoryBox';

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

const App = () => (
  <Router>
    <div style={{height: "100%"}}>
      <section id="appContainer" className="">
          <NavBar/>
          <br/>
         
          <Route exact path="/" component={HomePage}/>
          <Route path="/signin" component={UserLogin}/>
          <Route path="/signup" component={UserRegister}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/dashboard/categories" component={CategoryBox}/>
          <Route path="/dashboard/products" component={ProductBox}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/single" component={Single}/>
      </section>
    </div>
    
  </Router>
);

ReactDom.render(<App />, document.getElementById('react-app'));