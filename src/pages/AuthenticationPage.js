import React, { useContext, useEffect, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

import SignInForm from '../components/auth-page/sign-in-form';
import SignUpForm from '../components/auth-page/sign-up-form';

import { AuthUserContext } from '../context/auth-user.context';
import { InnerWrapper } from '../styles/globalwrapper.style';
import { Container, CustomHeading, CustomParagraph, LogoContainer, CustomToggle, LogoText } from '../styles/pages/authenticationpage.style';
import { checkUserDocRefExists } from '../utils/firebase.utils';

import {motion} from 'framer-motion'
import { useState } from 'react';

import logo from '../assets/MT-AppLogo.png'
import { defaultVariant } from '../utils/framerMotionAnims/routesAnimations';

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
    <InnerWrapper as={motion.div}
      variants={defaultVariant}
      initial="hidden"
      animate="visible"
      exit="exit" >
      <Container>
        <LogoContainer>
          <img src={logo} width="128" height="auto" alt="MT App Logo"/>
          <LogoText>The Finance tracker for frugal people.</LogoText>
        </LogoContainer>

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