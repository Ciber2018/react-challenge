import {React} from 'react';
import Navbar from '../../components/Navbar';
import ButtonCard from '../../components/ButtonCard';
import { useNavigate } from "react-router-dom";

const Sale = () =>{
    let history = useNavigate();
    const createOrder = () => {        
        history('/order');
    }
    return (
        <>
         <Navbar/>
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