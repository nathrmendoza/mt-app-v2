import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase.utils'

export const AuthUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
})

const AuthUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  useEffect(() => {

    const listener = onAuthStateChangedListener(async user => {
      console.log(user);
      
      if (user) 
        setCurrentUser(user);
      else
        setCurrentUser(null);
    })

    return listener
  }, [])

  return (
    <AuthUserContext.Provider value={value}>{children}</AuthUserContext.Provider>
  )
}

export default AuthUserProvider