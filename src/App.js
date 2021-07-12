import './App.css';
import React from 'react';

//import FormValidation from './formActivities/MainForm'
//import MyStore from './ecommerce_react_routes/main';
import AuthenticateLogin from './authenticationPage/Authenticate.js';

class App extends React.Component {

  render(){
    return (
      <div className='App'>
        <AuthenticateLogin/>
      </div>
    )
  }
}

export default App;
