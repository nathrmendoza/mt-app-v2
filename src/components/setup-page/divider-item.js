import React from 'react'
import InputPercent from '../input-percent';
import ExpenseItem from './expense-item'
import {BsFillTrashFill} from 'react-icons/bs'

import Button from '../button';
import { DividerWrapper, Left, NameInput, RemoveDivider, Right } from '../../styles/components/divider-item';

const DividerItem = ({item, checkLength, onChangeDividerHandler, removeDividerHandler, expenseHandler, addExpenseHandler, removeExpenseHandler}) => {
  const {id, name, percent, expenses} = item

  const removeHandler = () => removeDividerHandler(id);
  const addExpenseH = () => addExpenseHandler(id);

  return (
    <DividerWrapper>
      <Left>
        <NameInput name='name' value={name} type='text' placeholder='Enter Divider name' data-divider-group={id} onChange={onChangeDividerHandler}/>
        <input name='percent' value={percent} type='number' min={0} max={100} placeholder='Enter percentage' data-divider-group={id} onChange={onChangeDividerHandler}/>
        <InputPercent name='percent' value={percent} min={1} max={100} data-divider-group={id} onInput={onChangeDividerHandler} />
        <RemoveDivider type='button' width="auto" buttonType='redHasIcon' disabled={checkLength} onClick={removeHandler}><BsFillTrashFill/>Remove Divider</RemoveDivider>
      </Left>
      <Right>
        {expenses && expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} parentId={id} expenseHandler={expenseHandler} removeExpenseHandler={removeExpenseHandler}/>)}
        <Button type='button' onClick={addExpenseH}>Add Expense</Button>
      </Right>
    </DividerWrapper>
  )
}

export default DividerItem