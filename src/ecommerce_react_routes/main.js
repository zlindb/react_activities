import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'

//useParams - returns an object of the params for the route rendered
// /user/:userName
// const params = useParams(); params.userName

const Inventory = [
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
        {/*{Inventory.map(item=>(
          <div className="itemNav" key={item.id}>
            <Link to={`${url}/item/${item.id}`}>{item.id}-{item.name}</Link>
            <br/>
          </div>
        ))}
        */}

          {/*path works better here instead of url*/}
          {Inventory.map(i=>(
            <ItemSmall {...i} baseUrl={path} />

          ))}
          <hr/>

        <Switch>
        {/*
            {Inventory.map(item=>(
              <Route key={item.id} path={`${path}/item/${item.id}`}>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
              </Route>
            ))}
          */
          /* Version Two */
        }


            <Route path={`${path}/items/:itemId`}>
              <Item />
            </Route>
            <Route path={`${path}/items/*`}>
              <p>Item Not Found</p>
            </Route>
        </Switch>
      </div>

    </Router>
  )
}

const ItemSmall = (props)=>(
  <div className="Item" key={`item-${props.id}`}>
    <Link to ={`${props.baseUrl}/items/${props.id}`}>{props.name}</Link>
  </div>
)

const Item = () =>{
  let {itemId} = useParams();

  const [item, ...rest] = Inventory.filter(i => i.id.toString() === itemId);
  if(item){
    return (
      <div className="Item">
        <p>
          <strong>id:</strong> {item.id}
        </p>
        <p>
          <strong>name:</strong> {item.name}
        </p>
        <p>
          <strong>description:</strong> {item.description}
        </p>
      </div>
    )
  }else{
    return (
      <p>404 Item not found</p>
    )
  }
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
