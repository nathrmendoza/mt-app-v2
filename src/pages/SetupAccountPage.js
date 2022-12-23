import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DividerItem from '../components/setup-page/divider-item'
import { AuthUserContext } from '../context/auth-user.context'
import { createUserDoc } from '../utils/firebase.utils'

import {motion} from 'framer-motion'
import { noDelayVariant } from '../utils/framerMotionAnims/routesAnimations'
import { InnerWrapper } from '../styles/globalwrapper.style'

import { AddDividerContainer, Container, CustomForm, CustomLabel, CustomSubmit, CustomTwoColContainer, FormOverflowWrapper, Wrapper } from '../styles/pages/setuppage.style'
import { Heading3, Heading4 } from '../styles/typography.style'
import Input from '../components/input'
import { LineDivider } from '../styles/pages/authenticationpage.style'
import Button from '../components/button'

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
  const { currentUser, userDb } = useContext(AuthUserContext)

  const navigate = useNavigate();

  useEffect(() => {
    //failsafe to redirect to account page if user exists
    if (userDb)
      navigate('/my-account')
  }, [userDb, navigate])

  const onChangeHandler = event => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserDoc(currentUser, userData)
      navigate('/my-account')
    } 
    catch(err) {
      console.log(`Error code: ${err.code}\nError message: ${err.message}`)
    }
  }

  return (
    <InnerWrapper as={motion.div}
      variants={noDelayVariant}
      initial="hidden"
      animate="visible"
      exit="exit" >
        <Container>
          <Wrapper>
            <Heading3>Let's set things up</Heading3>
            <CustomForm onSubmit={onSubmitHandler}>
              <FormOverflowWrapper>
                <CustomTwoColContainer>
                  <div>
                    <CustomLabel htmlFor="displayName">What should we call you?</CustomLabel>
                    <Input width="100%" required name='displayName' id="displayName" value={userData.displayName} type='text' onChange={onChangeHandler} label='Enter name'/>
                  </div>  
                  <div>
                    <CustomLabel htmlFor="monthlyGrossIncome">Monthly Gross Income?</CustomLabel>
                    <Input width="100%" required name='monthlyGrossIncome' id="monthlyGrossIncome" value={userData.monthlyGrossIncome} type='number' onChange={onChangeHandler} label='Enter monthly gross income'/>
                  </div>
                </CustomTwoColContainer>

                <LineDivider/>

                <Heading4>Your Dividers</Heading4>
                {userData.dividers.map(item => <DividerItem key={item.id} item={item} checkLength={userData.dividers.length <= 1} onChangeDividerHandler={onChangeDividerHandler} removeDividerHandler={removeDivider} expenseHandler={onChangeExpensesHandler} addExpenseHandler={addExpense} removeExpenseHandler={removeExpense}/>)}

                <AddDividerContainer>
                  <Button type='button' onClick={addDivider}>+ Add Divider</Button>
                </AddDividerContainer>
                
                <CustomSubmit type='submit'>Save Profile</CustomSubmit>
              </FormOverflowWrapper>
            </CustomForm>
          </Wrapper>
        </Container>
    </InnerWrapper>
  )
}

export default SetupAccountPage