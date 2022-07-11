import React from 'react'
import SignInForm from './components/auth/sign-in-form';
import SignUpForm from './components/auth/sign-up-form';

function App() {
  

  return (
    <div className="App">
      
      <h4>Sign in</h4>
      <SignInForm/>

      <h4>Don't have an account? Sign up here.</h4>
      <SignUpForm/>
    </div>
  );
}

export default App;
