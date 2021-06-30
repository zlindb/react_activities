import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom'

const inventory = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Shoes you can buy'
  },
  {
    id: 2,
    name: 'Backpack',
    description: 'Backpack buy buy'
  },
  {
    id: 3,
    name: 'TravelMug',
    description: 'Useful travelmug on sale'
  }
]

const Homepage = () =>(
  <h1>Home</h1>

)


const Store = () =>{
  const {path, url} = useRouteMatch();
  console.log(url);
  return (
    <Router>
      <div className ="ItemSales">
        <h2>Item For Sales</h2>
        <hr/>
        {inventory.map(item=>(
          <div className="itemNav" key={item.id}>
            <Link to={`${url}/item/${item.id}`}>{item.id}-{item.name}</Link>
            <br/>
          </div>
        ))}
        <hr/>
        <Switch>
            {inventory.map(item=>(
              <Route key={item.id} path={`${path}/item/${item.id}`}>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
              </Route>
            ))}
            <Route path={`${path}/item/*`}>
              <p>Item Not Found</p>
            </Route>
        </Switch>
      </div>

    </Router>
  )
}

const Navbar = () =>(
  <div className="Navbar">
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/store">Store</Link>
    <hr/>
  </div>
)

const MyStore = () =>{
  return (

  <Router>
      <h1>My Store</h1>
      <hr/>
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
  )
}

export default MyStore;
