import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListener, getUserDoc } from '../utils/firebase.utils'

export const AuthUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  userDb: null,
  setUserDb: () => {} 
})

const AuthUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userDb, setUserDb] = useState(null)
  const value = {currentUser, setCurrentUser, userDb, setUserDb}

  useEffect(() => {

    const listener = onAuthStateChangedListener(async user => {
      
      if (user) {
        setCurrentUser(user);
        //get user data
        const response = await getUserDoc(user);
        setUserDb(response);
      }
      else {
        setCurrentUser(null);
        setUserDb(null);
      }
    })

    return listener
  }, [])

  return (
    <AuthUserContext.Provider value={value}>{children}</AuthUserContext.Provider>
  )
}

export default AuthUserProvider