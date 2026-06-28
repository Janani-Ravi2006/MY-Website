import React from 'react';
import {NavLink,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Product from './Product';
import About from './About';
import Home from './Home';
function App()
{
  return(
     <div className="hero">
      <h1>Ecommerce Website</h1>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/product">PRODUCT</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
      </nav>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
           </div>
  );
}
export default App;