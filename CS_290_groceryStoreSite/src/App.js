import './App.css';
import React from 'react';
import stores from './data/stores';
import items from "./data/items";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StoresPage';

function App() {  

  return (
    <div className="App">
      <Router>
        <div className='App-header'>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/order">
            <OrderPage items={items}/>
          </Route>

          <Route path="/stores">
            <StoresPage stores={stores}/>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
