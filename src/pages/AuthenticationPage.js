import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import SignInForm from '../components/auth-page/sign-in-form';
import SignUpForm from '../components/auth-page/sign-up-form';

import { AuthUserContext } from '../context/auth-user.context';
import { checkUserDocRefExists } from '../utils/firebase.utils';

const AuthenticationPage = () => {
  const { currentUser } = useContext(AuthUserContext)
  const navigate = useNavigate();

  //check if there is a signed in user
  useEffect(() => {
    const ifSignedInRedirect = async () => {
      const checkUserDoc = await checkUserDocRefExists(currentUser)
      if (checkUserDoc)
        navigate('/my-account')
      else
        navigate('/setup-account')
    }

    if (currentUser) ifSignedInRedirect()
    
  }, [currentUser, navigate])

  return (
    <div>
        <h2>Sign in</h2>
        <p>Welcome back!</p>
        <SignInForm/>

        <h2>Sign up</h2>
        <p>It's quick and easy.</p>
        <SignUpForm/>
    </div>
  )
}

export default AuthenticationPage