import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/signin/signin.component';
import SignUp from './pages/signup/signup.component';
import Header from './components/header/header.component';

import './App.scss';


function App() {
  return (
    <div className="position-relative wrapper">
      <Header />
      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
