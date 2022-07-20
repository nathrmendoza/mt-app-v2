import React, { useState } from 'react'
import { 
  googleSignIn,
  googleSignInRedirect,
  facebookSignIn,
  facebookSignInRedirect,
  signInWithEmailPassword
} from '../../utils/firebase.utils'
import { isMobile } from 'react-device-detect'

import Button from '../button'
import Input from '../input'

const formDefaults = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formInputs, setFormInputs] = useState(formDefaults)
  const {email, password} = formInputs

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormInputs({...formInputs, [name]: value})
  }

  const signInWithGoogleHandler = async () => {
    if (isMobile) await googleSignInRedirect();
    else await googleSignIn()
  }

  const signInWithFacebookHandler = async () => {
    if (isMobile) await facebookSignInRedirect();
    else await facebookSignIn()
  }

  const signInWithEmailPasswordHandler = async (event) => {
    event.preventDefault()

    try {
      await signInWithEmailPassword(email, password)

      //RESET FORM
      setFormInputs(formDefaults);

    } 
    catch(err) {
      switch (err.code) {
        case 'auth/user-not-found':
          console.log('User not found');
          break;
        case 'auth/wrong-password':
          console.log('Wrong password');
          break;
        default:
          console.log(`Error Code: ${err.code}\nError Message: ${err.message}`);
      }
    }
  }

  return (
    <div>
      <form onSubmit={signInWithEmailPasswordHandler}>
        <Input type='email' name='email' value={email} onChange={onChangeHandler} label='Email'/>
        <Input type='password' name='password' value={password} onChange={onChangeHandler} label='Password'/>
        <Button type='submit'>Sign In</Button>
      </form>
      <Button type='button' buttonType='google' onClick={signInWithGoogleHandler}>Google Sign In</Button>
      <Button type='button' buttonType='facebook' onClick={signInWithFacebookHandler}>Facebook Sign In</Button>
    </div>
  )
}

export default SignInForm