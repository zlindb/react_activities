import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Prompt, Link, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './style.css';
import { ErrorPage as NotFound } from './404.js';
import VerifyTokenForm from './VerifyToken';

//another way to trigger a dialog message, by using the history package and any router type
//other than the StaticRouter. A StaticRouter is a router type that never changes location and is used mainly for testing.
import { createBrowserHistory as createHistory} from 'history';

function validateEmail(value){
  let error;
  if(!value){
    error='Email is required';
  }
  return error;
}

function validateName(value){
  let error;
  if(!value){
    error='Name is Required';
  }
  return error;
}

function Dashboard(){
  return <div>Dashboard page</div>
}

const AuthService = {



  getToken: function(){
    return '12345'
  },
  isAuthenticated: function(){
    const userdata = [
      {
        username: 'abc@gmail.com',
        password: '123'
      }
    ];

    
    return false;
  }
}

const AuthenticateLogin = () =>{

  const history = createHistory({
    getUserConfirmation(msg, callback){
      const allowTransition = window.confirm(msg);
      callback(allowTransition);
    }
  })

  return (
    <div className="login">
      <Router history={history}>
        <Switch>
          <Route path="/" exact children={<LoginForm/>} />
          <Route path="/verify" exact children={<VerifyTokenForm/>} />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


/*Formik Form*/
export const LoginForm =()=>(
  <div>
    <h1>Login</h1>
    <Formik initialValues={{
        username: '',
        email:'',
      }}
      onSubmit={values=>{
        //same shade as initial values
        console.log(values);
      }}
    >
    {
      ({errors, touched, validateField, validateForm, dirty}) => (
        <Form>
          <label>
            Email*:
            <Field name="email" validate={validateEmail} />
          </label>
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label>
            Name*:
            <Field name="username" validate={validateName} />
          </label>
          {errors.username && touched.username && <div>{errors.username}</div>}
          <button type="submit">submit</button>
          <span>Form is Dirty: {dirty ? "True" : "False"}</span>
          {/*
            <Prompt message={location=>
              `Are you sure you want to go to the ${location.pathname}? you will lose all your data!`
            }
            when={dirty}
            />
          */}
        </Form>
      )
    }
    </Formik>
  </div>
)

export default AuthenticateLogin;
