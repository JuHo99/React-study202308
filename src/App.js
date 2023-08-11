import React from 'react';
import ExpenseList from './components/ExpenseList';
import Hello from './Hello';

const App = () => {

  const expenses = [
    {
      title: "바나나",
      price: 2000,
      date: new Date(2023, 3 - 1, 23)
    },
    {
      title: "BBQ",
      price: 20000,
      date: new Date(2023, 5 - 1, 21)
    },
    {
      title: "도미노피자",
      price: 35000,
      date: new Date(2023, 7 - 1, 14)
    }
  ];


  return (
    <>
    <ExpenseList items={expenses}/>
    </>
  );
}



export default App;