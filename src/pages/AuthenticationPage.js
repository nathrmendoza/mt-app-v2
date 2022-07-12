import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import SignInForm from '../components/auth/sign-in-form';
import SignUpForm from '../components/auth/sign-up-form';

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
    
  }, [currentUser])

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