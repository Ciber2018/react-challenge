import {React, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { openMobileEndMenu } from '../helpers/helper';
import EndMenu from './EndMenu';
import Input from './Input';
import OperationMenu from './OperationMenu';

const Order = () => {
   let [customer,setCustomer] = useState('');
   let [endMenuContent,setEndMenuContent] = useState('accessories')


    const handleCustomer = (e) => {
      setCustomer(e.target.value);      
    }


    return (
        <>

        <div className='container-fluid'>
          <div className='row'>          
            <div className='col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-2'>
              <Navbar customClasses='navbar navbar-example container-xxl navbar-expand-lg navbar-light bg-light'>
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
                     <Outlet/>
                  </div>
                  <div className='col-lg-2 mb-4 enable-desktop'>
                     <OperationMenu/>
                  </div>        
              </div>         
           
            </div>
        </div>

        <div className="buy-now">          
          <button
            className="custom-btn btn-danger btn-buy-now hide-element"
            type="button"
            databstoggle="offcanvas"
            databstarget="#offcanvasEnd"
            ariacontrols="offcanvasEnd"
            onClick={(e)=>{             
              openMobileEndMenu(e);
              endMenuContent == 'accessories' ? setEndMenuContent('operations') : setTimeout(() => setEndMenuContent('accessories'), 300);       
              
            }}
          >
            Operaciones
          </button>
          <div className='col-lg-2 mb-4'>
            <EndMenu updateContent={setEndMenuContent}>
            {endMenuContent == 'accessories' ? (
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