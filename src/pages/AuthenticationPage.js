import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import SignInForm from '../components/auth-page/sign-in-form';
import SignUpForm from '../components/auth-page/sign-up-form';

import { AuthUserContext } from '../context/auth-user.context';
import { Heading4, Paragraph } from '../styles/typography.style';
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
        <Heading4>Sign in</Heading4>
        <Paragraph>Welcome back!</Paragraph>
        <SignInForm/>

        <Heading4>Sign up</Heading4>
        <Paragraph>It's quick and easy.</Paragraph>
        <SignUpForm/>
    </div>
  )
}

export default AuthenticationPage