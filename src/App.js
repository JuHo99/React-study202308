import React from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

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

  console.log(`App 실행`);

  // ExpenseForm에 보낼 함수
  const addExpenseHandler = (newExpense)=>{
    console.log(newExpense);
  }

  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpenseList items={expenses}/>
    </>
  );
}



export default App;