import {React} from 'react';
import Navbar from '../../components/Navbar';
import ButtonCard from '../../components/ButtonCard';
import { useNavigate } from "react-router-dom";
import { DemoSaleList } from '../../helpers/helper';

const Sale = () =>{
    let history = useNavigate();
    const createOrder = () => {        
        history('/order');
    }

    const orders = DemoSaleList();    

    return (
        <>
         <Navbar customClasses='layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme'>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Search..."
                            aria-label="Search..."
                        />
                        </div>
                    </div>                   

            </div>
         </Navbar>
         <div className='content-wrapper'>
            <div className='container-xxl flex-grow-1 container-p-y'>
                <div className='row'>
                    <div className="col-sm-6 col-lg-10 mb-4"></div>
                    
                    <div className="col-sm-6 col-lg-2 mb-4">
                        <ButtonCard iconClass='tf-icons bx bx-add-to-queue bx-md' text='Crear Orden' handleClick={()=>createOrder()}/>
                    </div>   
                </div>            
            </div>
         </div>
        </>
       
    )
}

export default Sale;