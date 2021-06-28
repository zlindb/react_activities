import './App.css';
import React from 'react';

//import FormValidation from './formActivities/MainForm'
import MyStore from 'ecommerce_react_routes';

class App extends React.Component {

  render(){
    return (
      <div className='App'>
        <MyStore/>
      </div>
    )
  }
}


export default App;
