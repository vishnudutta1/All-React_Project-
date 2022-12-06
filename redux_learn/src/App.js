import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Navbar/>
     <Product/>

      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>

      </Routes>
     
     
     </BrowserRouter>

     {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
