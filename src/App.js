import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Profile from './components/Profile'
import Transactions from './components/Transactions'
import AddSale from './components/AddSale'

function App() {
  return (
    <Router>
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/addsale" component={AddSale} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/profile" component={Profile} />


      </div>
      <div className="bg-gray-100 rounded-lg shadow navigation flex justify-around items-center">
            <Link to="/" className="mr-4">
              <img className="h-6 w-6" src="/images/home.svg" alt="Home"></img>
            </Link>

            <Link to="/addsale" className="mr-4">
              <img className="h-6 w-6" src="/images/plus.svg" alt="Add"></img>
            </Link>

            <Link to="/transactions" className="mr-4">
              <img className="h-6 w-6" src="/images/transaction.svg" alt="Transactions"></img>
            </Link>

            <Link to="/profile" className="mr-4">
              <img className="h-6 w-6" src="/images/user.svg" alt="Home"></img>
            </Link>

        </div>
    </Router>
  );
}



export default App;
