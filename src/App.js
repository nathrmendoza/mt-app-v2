import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages
import AuthenticationPage from './pages/AuthenticationPage'
import SetupAccountPage from './pages/SetupAccountPage'
import AccountPage from './pages/AccountPage'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route index element={<AuthenticationPage/>}/>
        <Route path='/setup-account' element={<SetupAccountPage/>}/>
        <Route path='/:id' element={<AccountPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
