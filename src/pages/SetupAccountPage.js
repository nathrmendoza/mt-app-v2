import React, { useContext, useEffect, useState } from 'react'
import DividerItem from '../components/setup-page/divider-item'
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
const DIVIDERS_DEFAULT = {
  id: 0,
  name: '',
  percent: 0,
  expenses: []
}

//child
const EXPENSES_DEFAULT = {
  id: 0,
  name: '',
  value: 0,
  reaccuring: false
}

const SetupAccountPage = () => {

  const [userData, setUserData] = useState(USER_DATA_DEFAULT)

  useEffect(() => {
    console.log(userData);
  }, [userData])

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
    console.log(userData);
  }

  const addDivider = () => {
    let tempDividers = [...userData.dividers, {...DIVIDERS_DEFAULT, id: userData.dividers.length}]
    setUserData({...userData, dividers: tempDividers})
  }

  const removeDivider = (id) => {
    let tempDividers = [...userData.dividers]
    tempDividers = tempDividers.filter(e => {
      return e.id !== id
    }).map((e, index) => {
      return {...e, id: index }
    });
    setUserData({...userData, dividers: tempDividers})
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
      return tempData
    })
  }

  const addExpense = (divId) => {
    let tempDividers = [...userData.dividers]
    let tempExpenses = [...tempDividers[divId].expenses, {...EXPENSES_DEFAULT, id: tempDividers[divId].expenses.length}]
    
    tempDividers = tempDividers.map(e => {
      if (e.id === parseInt(divId))
        e.expenses = tempExpenses

      return e
    })
    
    setUserData({...userData, dividers: tempDividers})
  }
  
  const removeExpense = (expId, divId) => {
    let tempDividers = [...userData.dividers]
    let tempExpenses = [...tempDividers[divId].expenses]

    tempExpenses = tempExpenses.filter(e => {
      return e.id !== expId
    }).map((e, index) => {
      return {...e, id: index}
    })

    tempDividers.map(e => {
      if (e.id === parseInt(divId)) 
        e.expenses = tempExpenses

      return e
    })

    setUserData({...userData, dividers: tempDividers})
  }

  return (
    <div>
      <form>
        <input name='displayName' value={userData.displayName} type='text' onChange={onChangeHandler} placeholder='Enter name'/>
        <input name='monthlyGrossIncome' value={userData.monthlyGrossIncome} type='number' onChange={onChangeHandler} placeholder='Enter monthly gross income'/>
        <br/><br/>
        <button type='button' onClick={addDivider}>ADD DIVIDER</button>
        {userData.dividers.map(item => <DividerItem key={item.id} item={item} checkLength={userData.dividers.length <= 1} onChangeDividerHandler={onChangeDividerHandler} removeDividerHandler={removeDivider} expenseHandler={onChangeExpensesHandler} addExpenseHandler={addExpense} removeExpenseHandler={removeExpense}/>)}
      </form>
    </div>
  )
}

export default SetupAccountPage