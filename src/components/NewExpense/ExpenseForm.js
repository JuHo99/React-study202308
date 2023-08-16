import React, {useState}  from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpense , onToggle}) => {

    const [userInput,setUserInput] = useState({title :'',price:'',date:''});

    const titleChangeHendler = e =>{

        setUserInput((prevUserInput) =>{
            return {
                ...prevUserInput,
                title:e.target.value
            };
        });
    };
    const priceChangeHendler = e =>{
        setUserInput({
            ...userInput,
            price:e.target.value
        });
    };
    const dateChangeHendler = e =>{
        setUserInput({
            ...userInput,
            date:e.target.value
        });
    };

    const formSubmitHandler = e =>{
        e.preventDefault();
        console.log(`submit 버튼을 누름`);
        

        const newExpense = {
            id :Math.random(),
            title : userInput.title,
            price: userInput.price,
            date:new Date(userInput.date)
        }

        onSaveExpense(newExpense);
        // console.log(userInput);

        setUserInput({
            title :'',
            price:'',
            date:''
        });
        onToggle();
    }

    const cancelInsertHandler = () =>{
        onToggle();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text' 
                    onChange={titleChangeHendler}
                    value={userInput.title}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input 
                    type='number' 
                    min='100' 
                    step='100' 
                    onChange={priceChangeHendler}
                    value={userInput.price}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type='date' 
                    min='2019-01-01' 
                    max='2025-12-31' 
                    onChange={dateChangeHendler}
                    value={userInput.date}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelInsertHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm