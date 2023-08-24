import React, { useState } from 'react';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';
import Cart from './components/Food/Cart/Cart';

const App = () => {

const [cartIsShown,setCartIsShown]= useState(false);

const hideCartHandler = ()=>{
  setCartIsShown(false);
}

const showCartHandler = ()=>{
  setCartIsShown(true);
}


  return (

    <>
    {cartIsShown && <Cart onHide={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler}/>
      <div id='main'>
        <Meals />
      </div>
    </>

  );
};

export default App;
