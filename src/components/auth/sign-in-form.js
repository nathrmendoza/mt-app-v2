import React, { useState } from 'react'
import { 
  googleSignIn,
  googleSignInRedirect,
  facebookSignIn,
  facebookSignInRedirect,
  signInWithEmailPassword
} from '../../utils/firebase.utils'

import { isMobile } from 'react-device-detect'


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
        <input type='email' name='email' value={email} onChange={onChangeHandler} placeholder='Enter email'/>
        <input type='password' name='password' value={password} onChange={onChangeHandler} placeholder='Enter password'/>
        <button type='submit'>SIGN IN</button>
      </form>
      <button type='button' onClick={signInWithGoogleHandler}>SIGN IN WITH GOOGLE</button>
      <button type='button' onClick={signInWithFacebookHandler}>SIGN IN WITH FACEBOOk</button>
    </div>
  )
}

export default SignInForm