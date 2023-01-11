import {React} from 'react';
import './App.css';
import './core.css';
import './theme-default.css';
import './demo.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Sale from './pages/sale/Sale';


function App() {
  
  return (
   
    <Router>
      <>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/sale" element={<Sale/>} />
      </Routes>
       
      </>
    </Router>
     
    
  );
}

export default App;
