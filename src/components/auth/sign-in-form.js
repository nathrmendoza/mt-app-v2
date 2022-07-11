import React, { useState } from 'react'
import { 
  googleSignIn,
  facebookSignIn,
  signInWithEmailPassword
} from '../../utils/firebase.utils'

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
    try {
      const { user } = await googleSignIn()
      console.log(user)

    } catch(err) {
      console.log(`Error Code: ${err.code}\nError Message: ${err.message}`)
    }
  }

  const signInWithFacebookHandler = async () => {
    try {
      const { user } = await facebookSignIn()
      console.log(user)

    } catch(err) {
      console.log(`Error Code: ${err.code}\nError Message: ${err.message}`)
    }
  }

  const signInWithEmailPasswordHandler = async (event) => {
    event.preventDefault()

    try {
      const {user} = await signInWithEmailPassword(email, password)
      console.log(user)

    } catch(err) {
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