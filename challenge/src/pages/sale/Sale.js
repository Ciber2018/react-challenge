import {React} from 'react';
import Navbar from '../../components/Navbar';
import ButtonCard from '../../components/ButtonCard';

const Sale = () =>{
    return (
        <>
         <Navbar/>
         <div className='content-wrapper'>
            <div className='container-xxl flex-grow-1 container-p-y'>
                <div className='row'>
                    <div className="col-sm-6 col-lg-10 mb-4"></div>
                    
                    <div className="col-sm-6 col-lg-2 mb-4">
                        <ButtonCard text='Orden' iconClass='tf-icons bx bx-add-to-queue bx-sm'/>
                    </div>   
                </div>            
            </div>
         </div>
        </>
       
    )
}

export default Sale;