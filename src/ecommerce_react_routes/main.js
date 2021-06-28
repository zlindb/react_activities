import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Homepage = () =>(
  <h1>Home</h1>
  <hr/>
)

const Store = () =>(
  <h1>My Store </h1>
  <hr/>

)

const Navbar = () =>(
  <div className="Navbar">
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/store">Store</Link>
  </div>
)

const MyStore = () =>{
  <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="*">
        <h1>404 Not Found</h1>
        <a href = '/'>Return Home</a>
      </Route>
    </Switch>
  </Router>
}

export default MyStore;
