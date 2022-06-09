import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Home from './components/Home';
import {BrowserRouter as Routes,Route} from 'react-router-dom'
import CheckOut from './components/CheckOut';
// import ViewsDatePicker from './components/ViewsDatePicker';
function App() {
  return (
    <div className="App">

      <Routes>
          <Route path={'/'} element = {<Home/>}/>
          <Route path={'/checkout'} element = {<CheckOut/>}/>
        
      </Routes>

      <Header/>
      <Home/>
      {/* <ViewsDatePicker/> */}

      
    </div>
  );
}

export default App;
