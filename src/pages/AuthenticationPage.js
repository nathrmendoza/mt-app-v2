import React, { useContext, useEffect, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

import SignInForm from '../components/auth-page/sign-in-form';
import SignUpForm from '../components/auth-page/sign-up-form';

import { AuthUserContext } from '../context/auth-user.context';
import { InnerWrapper } from '../styles/globalwrapper.style';
import { Container, CustomHeading, CustomParagraph } from '../styles/pages/authenticationpage.style';
import { checkUserDocRefExists } from '../utils/firebase.utils';

import { CustomToggle } from '../styles/pages/authenticationpage.style';

import {motion} from 'framer-motion'
import { useState } from 'react';

const AuthenticationPage = () => {
  const { currentUser } = useContext(AuthUserContext)
  const navigate = useNavigate();
  const [signState, setSignState] = useState(false);

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

  const signStateToggle = () => setSignState(!signState);

  return (
    <InnerWrapper>
      <Container as={motion.div} 
        initial={{opacity: 0, filter: 'blur(5px)'}} 
        animate={{opacity: 1, filter: 'blur(0px)'}} 
        transition={{delay: 1, duration: 0.8}}>

        {!signState && 
        <Fragment>
          <CustomHeading>Sign in</CustomHeading>
          <CustomParagraph>Don't have an account yet? <CustomToggle onClick={signStateToggle}>Sign&nbsp;up&nbsp;here</CustomToggle></CustomParagraph>
          <SignInForm/>
        </Fragment>
        }

        {signState &&
        <Fragment>
          <CustomHeading>Sign up</CustomHeading>
          <CustomParagraph>Already have an account? <CustomToggle onClick={signStateToggle}>Sign&nbsp;in&nbsp;here</CustomToggle></CustomParagraph>
          <SignUpForm/>
        </Fragment>
        }
        
      </Container>
    </InnerWrapper>
  )
}

export default AuthenticationPage