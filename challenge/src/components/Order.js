import {React, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ButtonCard from './ButtonCard';
import Input from './Input';
//import Plate from './Plate';

const Order = () => {
   let [customer,setCustomer] = useState('');

    const handleCustomer = (e) => {
      setCustomer(e.target.value);      
    }


    return (
        <>

        <div className='container-fluid'>
          <div className='row'>          
            <div className='col-sm-10 col-md-10 offset-md-1 col-lg-6 offset-lg-2'>
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
                  <div className="col-sm-6 col-lg-10 mb-4">                         
                     <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 bot-pad'>                      
                       <Input inputID='customer' inputValue={customer} inputType='text' inputFocus={false} inputClass='form-control' inputPlaceholder='Cliente' inputName='contrasena' inputOnChangeEvent={(e)=>{handleCustomer(e)}}/>
                     </div>                
                     <Outlet/>
                  </div>
                  <div className="col-sm-6 col-lg-2 mb-4">
                    <ButtonCard iconClass='tf-icons bx bx-dollar bx-md' text='Pagar Orden'/>
                    <ButtonCard iconClass='tf-icons bx bx-check-square bx-md' text='Confirmar Orden'/>
                    <ButtonCard iconClass='tf-icons bx bx-food-menu bx-md' text='Crear Recibo'/>
                    <ButtonCard iconClass='tf-icons bx bx-x bx-md' customColor={{backgroundColor:'#ff6666',color:'white'}} text='Cancelar Orden'/>
                                      
                  </div>
              </div>
           
           
            </div>
        </div>
       
        </>
    )
}

export default Order;