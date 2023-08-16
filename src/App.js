import React, { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses=[
    {
      id:1,
      title: "바나나",
      price: 2000,
      date: new Date(2023, 3 - 1, 23)
    },
    {
      id:2,
      title: "BBQ",
      price: 20000,
      date: new Date(2022, 5 - 1, 21)
    },
    {
      id:3,
      title: "도미노피자",
      price: 35000,
      date: new Date(2023, 7 - 1, 14)
    },
    {
      id:4,
      title: "엽기떡볶이",
      price: 17000,
      date: new Date(2021, 3 - 1, 28)
    }
  ];

  console.log(`App 실행`);

const [expenseList,setExpenseList] = useState(expenses);


  // ExpenseForm에 보낼 함수
  const addExpenseHandler = (newExpense)=>{
    console.log(newExpense);
    setExpenseList([...expenseList,newExpense]);
  }


  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpenseList items={expenseList}/>
    </>
  );
}



export default App;