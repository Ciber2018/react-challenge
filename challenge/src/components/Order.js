import {React} from 'react';
import Navbar from '../components/Navbar';
import ButtonCard from './ButtonCard';

const Order = () => {
    return (
        <>
        <Navbar/>
        <div className='content-wrapper'>
            <div className='container-xxl flex-grow-1 container-p-y'>
              <div className='row'>
                  <div className="col-sm-6 col-lg-10 mb-4">
                  
                  </div>
                  <div className="col-sm-6 col-lg-2 mb-4">
                    <ButtonCard iconClass='tf-icons bx bx-dollar bx-md'/>
                    <ButtonCard iconClass='tf-icons bx bx-check-square bx-md'/>
                    <ButtonCard iconClass='tf-icons bx bx-food-menu bx-md'/>
                    <ButtonCard iconClass='tf-icons bx bx-x bx-md' customColor={{backgroundColor:'#ff6666',color:'white'}}/>
                                      
                  </div>
              </div>
           
           
            </div>
        </div>
       
        </>
    )
}

export default Order;