import {React} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ButtonCard from './ButtonCard';
//import Plate from './Plate';

const Order = () => {
  /*let match = useLocation();
  console.log(match);*/
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