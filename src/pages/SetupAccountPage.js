import React, { useContext, useEffect, useState } from 'react'
import { AuthUserContext } from '../context/auth-user.context'
import { createUserDoc } from '../utils/firebase.utils'

const USER_DATA_DEFAULT = {
  displayName: '',
  monthlyGrossIncome: 0,
  dividers: [
    {
      id: 0,
      name: '',
      percent: 0,
      expenses: [
        {
          id: 0,
          name: '',
          value: 0,
          reaccuring: false,
        }
      ]
    }
  ]
}

//parent
const DIVIDERS_DEFAULT = [
  {
    id: 0,
    name: '',
    percent: 0,
    expenses: []
  }
]

//child
const EXPENSES_DEFAULT = [
  {
    id: 0,
    name: '',
    value: 0,
    reaccuring: false
  }
]

const SetupAccountPage = () => {

  const [userData, setUserData] = useState(USER_DATA_DEFAULT)

  const onChangeHandler = event => {
    console.log(event.target)
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
    console.log(userData);
  }

  const onChangeDividerHandler = event => {
    const {name, value} = event.target;
    const inputId = parseInt(event.target.getAttribute('data-divider-group'));

    setUserData(prevState => {
      let tempDividers = [...prevState.dividers];
      tempDividers.map(item => {
        if (item.id === inputId)
          item[name] = value

        return item
      });
      return {...prevState, dividers: tempDividers}
    })
  }

  const onChangeExpensesHandler = event => {
    const {name, value} = event.target;
    const dividerId = parseInt(event.target.getAttribute('data-divider-group'));
    const inputId = parseInt(event.target.getAttribute('data-expenses-group'));

    setUserData(prevState => {
      let tempData = {...prevState}
      tempData.dividers.map (e => {
        if (e.id === dividerId)
          e.expenses.map(e => {
            if (e.id === inputId) {
              if (name === 'reaccuring')
                e[name] = !(value === 'true')
              else
                e[name] = value;
            }

            return e
          }) 
          return e
      })
      console.log(tempData);
      return tempData
    })
  }

  useEffect(() => {
    console.log(userData.dividers[0].expenses[0]);
  }, [])

  return (
    <div>
      <input name='displayName' value={userData.displayName} type='text' onChange={onChangeHandler} placeholder='Enter name'/>
      <input name='monthlyGrossIncome' value={userData.monthlyGrossIncome} type='number' onChange={onChangeHandler} placeholder='Enter monthly gross income'/>
      <br/><br/>
      {userData.dividers.map(item => 
        <div className='form-group' key={item.id}>
          <p>Divider Group</p>
          <input name='name' value={item.name} type='text' placeholder='Enter divider name' data-divider-group={item.id} onChange={onChangeDividerHandler}/>
          <input name='percent' value={item.percent} type='number' min={0} max={100} placeholder='Enter percentage' data-divider-group={item.id} onChange={onChangeDividerHandler}/>
          {item.expenses.map(expense => 
            <div key={expense.id}>
              <p>Divider expenses</p>
              <input name='name' value={expense.name} type='text' placeholder='Enter expense name' data-divider-group={item.id} data-expenses-group={expense.id} onChange={onChangeExpensesHandler}/>
              <input name='value' value={expense.value} type='number' placeholder='Enter expense value' data-divider-group={item.id} data-expenses-group={expense.id} onChange={onChangeExpensesHandler}/>
              <input name='reaccuring' value={expense.reaccuring} type='checkbox' data-divider-group={item.id} data-expenses-group={expense.id} onChange={onChangeExpensesHandler}/>
            </div>
          )}
        </div>  
      )}
    </div>
  )
}

export default SetupAccountPage