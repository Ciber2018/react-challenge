import {React, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from './Button';
import EndMenu from './EndMenu';
import Input from './Input';
import OperationMenu from './OperationMenu';

const Order = () => {
   let [customer,setCustomer] = useState('');
   let [endMenuContent,setEndMenuContent] = useState('');
   let [openEndMenu,setOpenEndMenu] = useState(false);


    const handleCustomer = (e) => {
      setCustomer(e.target.value);      
    }

    const menuContent = (e) => {      
      setEndMenuContent(e.target.childNodes[0].nodeValue);      
    }


    return (
        <>
        
        <div className='container-fluid'>
          <div className='row'>          
            <div className='col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-2'>
              <Navbar showIconMenu={true} customClasses='navbar navbar-example container-xxl navbar-expand-lg navbar-light bg-light'>
                <span className='order-navbar-spaces'>Subtotal: 0.00</span>          
                <span className='order-navbar-spaces'>Taxe: %</span>
                <span className='order-navbar-spaces'>Total: 0.00</span>               
              </Navbar>
            </div>          
          </div>
        </div>
       
        
        <div className='content-wrapper'>
            <div className='container-xxl flex-grow-1 container-p-y'>
              <div className='row'>                  
                  <div className="col-sm-12 col-md-12 col-lg-10 mb-4">                         
                     <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 bot-pad'>                      
                       <Input inputID='customer' inputValue={customer} inputType='text' inputFocus={false} inputClass='form-control' inputPlaceholder='Cliente' inputName='contrasena' inputOnChangeEvent={(e)=>{handleCustomer(e)}}/>
                     </div>                
                     <Outlet context={[setOpenEndMenu,menuContent]}/>
                  </div>
                  <div className='col-lg-2 mb-4 enable-desktop'>
                     <OperationMenu/>
                  </div>        
              </div>         
           
            </div>
        </div>

        <div className="buy-now">  
          {
            !openEndMenu &&
              <Button
                buttonText='Operaciones'
                buttonClass="custom-btn btn-outline-primary mobile-button hide-element"
                buttonType="button"                               
                handleClick={ (e)=>{  
                  menuContent(e) ;          
                  setOpenEndMenu(true) ;               
                }} 
              />  

          }               
          
          <div className='col-lg-2 mb-4'>
            <EndMenu open={openEndMenu} handleCloseEndMenu={()=>setOpenEndMenu(false)}>
            {endMenuContent == 'Complementos' ? (
              <h2>Complementos</h2>
            ) : (
              <OperationMenu/>
            )}              
            </EndMenu>
          </div>
          
        </div>
       
        </>
    )
}

export default Order;