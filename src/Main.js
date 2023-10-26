import React from "react";
import Products from './components/Products';
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Button from 'react-bootstrap/Button';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';



function Main() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    
    <>
      <h2>hello</h2>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
       <Header onShowCart={showCartHandler} />
    <Products/>
    <Footer/>
    </>

  );
}

export default Main;