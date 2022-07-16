import React from 'react'

const ExpenseItem = ({expense, parentId, expenseHandler, removeExpenseHandler}) => {
  const {id, name, value, reaccuring} = expense

  const removeExpenseH = () => removeExpenseHandler(id, parentId)

  return (
    <div>
      <p>Divider expenses <button type='button' onClick={removeExpenseH}>REMOVE EXPENSE</button></p>
      <input name='name' value={name} type='text' placeholder='Enter expense name' data-divider-group={parentId} data-expenses-group={id} onChange={expenseHandler}/>
      <input name='value' value={value} type='number' placeholder='Enter expense value' data-divider-group={parentId} data-expenses-group={id} onChange={expenseHandler}/>
      <input name='reaccuring' value={reaccuring} type='checkbox' data-divider-group={parentId} data-expenses-group={id} onChange={expenseHandler}/>
    </div>
  )
}

export default ExpenseItem