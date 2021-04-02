import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProducts from './Component/AddProducts/AddProducts';
import Orders from './Component/Orders/Orders';
import Login from './Component/Login/Login';
import CheckOut from './Component/CheckOut/CheckOut';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Manage from './Component/Manage/Manage';
export const UserContext = createContext()



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]} className="App">
      
      
      <Router>
      {/* <h3>{loggedInUser.email}</h3> */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/login">
         <Login></Login>
         </Route>
         <Route path="/orders">
           <Orders></Orders>
         </Route>
          <Route path="/manage">
         <Manage></Manage>
         </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
