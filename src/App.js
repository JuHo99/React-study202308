import React from 'react';
import './App.css';
import AppItem from './AppItem';
import Noname from './Noname';
import Hello from './Hello';

const App = () => {

  // const $h2 = React.createElement('h2', null, '반가워요~~');

  return (
    <>
    <AppItem />
    <Hello />
    <Noname />
      
    </>
  );
}



export default App;