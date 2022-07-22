import React, { useState } from 'react'
import { 
  googleSignIn,
  googleSignInRedirect,
  facebookSignIn,
  facebookSignInRedirect,
  signInWithEmailPassword
} from '../../utils/firebase.utils'
import { isMobile } from 'react-device-detect'

import { BsGoogle, BsFacebook } from 'react-icons/bs'

import Button from '../button'
import Input from '../input'
import { TwoColContainer, SignInDivider, ButtonsContainer, SubmitContainer } from '../../styles/pages/authenticationpage.style'

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
        <TwoColContainer>
          <Input type='email' name='email' value={email} onChange={onChangeHandler} label='Email'/>
          <Input type='password' name='password' value={password} onChange={onChangeHandler} label='Password'/>
        </TwoColContainer>
        <SubmitContainer>  
          <Button type='submit' buttonType='secondary'>Sign In</Button>
        </SubmitContainer>
      </form>

      <SignInDivider>Or sign in via</SignInDivider>
      
      <ButtonsContainer>
        <Button type='button' buttonType='hasicon' width="180px" onClick={signInWithGoogleHandler}><BsGoogle/>Google Account</Button>
        <Button type='button' buttonType='hasicon' width="180px" onClick={signInWithFacebookHandler}><BsFacebook/>Facebook Account</Button>
      </ButtonsContainer>
    </div>
  )
}

export default SignInForm