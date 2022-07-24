import React, { useContext, Fragment } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

import { AuthUserContext } from '../context/auth-user.context'
import { signOutUser } from '../utils/firebase.utils'

import { Header } from '../styles/header.style'

const Navigation = () => {
  const {currentUser} = useContext(AuthUserContext)
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser()
    navigate('/')
  }

  return (
    <Fragment>
      <Header>
        {currentUser &&
          <Fragment>
          <button type='button' onClick={signOutHandler}>SIGN OUT</button>
          </Fragment>
        }
      </Header>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation