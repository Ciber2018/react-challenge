import {React,useState} from 'react';
import './App.css';
import './core.css';
import './theme-default.css';
import './demo.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Sale from './pages/sale/Sale';
import PagesLayout from './layouts/PagesLayout';
import Order from './components/Order';



function App() {
const {logged,setLogged} = useState(false);
  
  return (
   
    <Router>     
      <Routes> 
        <Route index element={<Auth/>} />
        <Route path='/' element={<PagesLayout/>} >     
          <Route path="/sale" exact element={<Sale/>} />
          <Route path="/order" exact element={<Order/>} />     
        </Route>      
      </Routes>   
      
    </Router>
         
  );
}

export default App;
