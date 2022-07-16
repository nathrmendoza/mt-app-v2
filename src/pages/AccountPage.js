import React, { useContext } from 'react'
import { AuthUserContext } from '../context/auth-user.context'

const AccountPage = () => {

  const { userDb } = useContext(AuthUserContext)
  console.log(userDb);

  if (!userDb) return <div>Loading...</div>
  else {
    return (
      <div><h1>Hi, {userDb.displayName}</h1></div>
    )
  }
}

export default AccountPage