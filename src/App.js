import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages
import AuthenticationPage from './pages/AuthenticationPage'
import SetupAccountPage from './pages/SetupAccountPage'
import AccountPage from './pages/AccountPage'
import Navigation from './components/navigation'
import { GlobalWrapper } from './styles/globalwrapper.style'
import Footer from './components/footer'

function App() {
  

  return (
    <div className="App">
      <GlobalWrapper>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<AuthenticationPage/>}/>
            <Route path='/setup-account' element={<SetupAccountPage/>}/>
            <Route path='/my-account' element={<AccountPage/>}/>
          </Route>
        </Routes>
        <Footer />
      </GlobalWrapper>
    </div>
  );
}

export default App;
