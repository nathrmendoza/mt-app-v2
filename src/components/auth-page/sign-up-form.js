import React, { useState } from 'react'
import {
  signUpWithEmailPassword
} from '../../utils/firebase.utils'

import Button from '../button'
import Input from '../input'

const formDefaults = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formInputs, setFormInputs] = useState(formDefaults)
  const {name, email, password, confirmPassword} = formInputs

  const onInputChangeHandler = (event) => {
    const {name, value} = event.target
    setFormInputs({...formInputs, [name]: value})
  }

  const onSignUpSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords mismatch')
      return false;
    }

    try {
      const user = await signUpWithEmailPassword(email, password, name);
      console.log(user);
      //RESET FORM
      setFormInputs(formDefaults);

    } catch (err) {
      console.log(`Error Code: ${err.code}\nError Message: ${err.message}`)
      switch (err.code) {
        case 'auth/email-already-in-use':
          console.log('Email is already in use');
          break;
        case 'auth/weak-password':
          console.log('Weak password, try something different');
          break;
        default:
          console.log(`Error Code: ${err.code}\nError Message: ${err.message}`);
      }
    }
  }

  return (
    <form onSubmit={onSignUpSubmitHandler}>
      <Input type='text' onChange={onInputChangeHandler} name='name' value={name} label='Your Name'/>
      <Input type='email' onChange={onInputChangeHandler} name='email' value={email} label='Your Email'/>
      <Input type='password' onChange={onInputChangeHandler} name='password' value={password} label='Set Your Password'/>
      <Input type='password' onChange={onInputChangeHandler} name='confirmPassword' value={confirmPassword} label='Confirm Your Password'/>

      <Button type='submit'>Sign Up</Button>
    </form>
  )
}

export default SignUpForm