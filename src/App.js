import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

//pages
import AuthenticationPage from './pages/AuthenticationPage'
import SetupAccountPage from './pages/SetupAccountPage'
import AccountPage from './pages/AccountPage'
import Navigation from './components/navigation'
import { GlobalWrapper } from './styles/globalwrapper.style'
import Footer from './components/footer'

import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalWrapper>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Navigation/>}>
              <Route index element={<AuthenticationPage/>}/>
              <Route path='/setup-account' element={<SetupAccountPage/>}/>
              <Route path='/my-account' element={<AccountPage/>}/>
            </Route>
          </Routes>
        </AnimatePresence>
        <Footer />
      </GlobalWrapper>
    </div>
  );
}

export default App;
