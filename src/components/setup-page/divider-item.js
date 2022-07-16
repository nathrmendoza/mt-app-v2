import React from 'react'
import ExpenseItem from './expense-item'

const DividerItem = ({item, checkLength, onChangeDividerHandler, removeDividerHandler, expenseHandler, addExpenseHandler, removeExpenseHandler}) => {
  const {id, name, percent, expenses} = item

  const removeHandler = () => removeDividerHandler(id);
  const addExpenseH = () => addExpenseHandler(id);

  return (
    <div className='divider-item'>
      <p>Divider Group <button type='button' disabled={checkLength} onClick={removeHandler}>REMOVE THIS</button></p>
      <input name='name' value={name} type='text' placeholder='Enter divider name' data-divider-group={id} onChange={onChangeDividerHandler}/>
      <input name='percent' value={percent} type='number' min={0} max={100} placeholder='Enter percentage' data-divider-group={id} onChange={onChangeDividerHandler}/>
      <br />
      <button type='button' onClick={addExpenseH}>ADD EXPENSE</button>
      {expenses && expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} parentId={id} expenseHandler={expenseHandler} removeExpenseHandler={removeExpenseHandler}/>)}
      
    </div>
  )
}

export default DividerItem