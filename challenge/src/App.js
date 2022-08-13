import {React,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar.js';
import SubNavbar from './components/header/SubNavbar';
import Cart from './components/body/Cart';
import {products} from './database/database';
import { Box, Typography } from '@mui/material';
import OrderSummary from './components/body/OrderSummary';
import Footer from './components/footer/Footer';


function App() {
  const [productsArray,setProductsArray]=useState(products);
  return (
    <div>
     <Navbar/>
     <SubNavbar/>
            
      <Cart data={productsArray}/>
      
            
       <OrderSummary data={productsArray}/>
      
    </div>
  );
}

export default App;
