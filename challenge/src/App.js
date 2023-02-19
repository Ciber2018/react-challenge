import {React} from 'react';
import './App.css';
import './core.css';
import './theme-default.css';
import './demo.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Sale from './pages/sale/Sale';
import PagesLayout from './layouts/PagesLayout';
import Order from './components/Order';
import PlateList from './components/PlateList';
import Error404 from './pages/404/Error404';



function App() {
  
  return (
   
    <Router>     
      <Routes> 
        <Route index element={<Auth/>} />
        <Route path="/sale" exact element={<Sale/>} /> 
        <Route path='/' element={<PagesLayout/>} >                 
          <Route path="/order" element={<Order/>}>
            <Route path=':product' element={<PlateList />} />
          </Route>              
        </Route> 
        <Route path="*" exact element={<Error404/>} />      
      </Routes>   
      
    </Router>
         
  );
}

export default App;
