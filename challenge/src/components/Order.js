import {React} from 'react';
import Navbar from '../components/Navbar';
import ButtonCard from './ButtonCard';

const Order = () => {
    return (
        <>
       
        <div className='row'>
          <div className='col-sm-1 col-md-1 col-lg-3'></div>
          <div className='col-sm-10 col-md-10 col-lg-6'>
          <Navbar customClasses='navbar navbar-example container-xxl navbar-expand-lg navbar-light bg-light'>
          <span className='order-navbar-spaces'>Subtotal: 0.00</span>          
          <span className='order-navbar-spaces'>Taxe: %</span>
          <span className='order-navbar-spaces'>Total: 0.00</span>
          </Navbar>
          </div>
          <div className='col-sm-1 col-md-1 col-lg-3'></div>
        </div>
        <div className='content-wrapper'>
            <div className='container-xxl flex-grow-1 container-p-y'>
              <div className='row'>
                  <div className="col-sm-6 col-lg-10 mb-4">
                  
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