import React from 'react'
import SignInForm from '../components/auth/sign-in-form';
import SignUpForm from '../components/auth/sign-up-form';

const AuthenticationPage = () => {
  return (
    <div>
        <h4>Sign in</h4>
        <SignInForm/>

        <h4>Don't have an account? Sign up here.</h4>
        <SignUpForm/>
    </div>
  )
}

export default AuthenticationPage