import React, { useContext, Fragment } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

import { AuthUserContext } from '../context/auth-user.context'
import { signOutUser } from '../utils/firebase.utils'

const Navigation = () => {
  const {currentUser} = useContext(AuthUserContext)
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser()
    navigate('/')
  }

  return (
    <Fragment>
      <div>
        {currentUser &&
          <Fragment>
          <button type='button' onClick={signOutHandler}>SIGN OUT</button>
          <div className='profilepic' style={{width: '64px', height: '64px', borderRadius: '50%', backgroundColor:'#E9E9E9', overflow: 'hidden'}}>
            <img src='https://via.placeholder.com/128x128.png' alt='Person'/>
          </div>
          </Fragment>
        }
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation