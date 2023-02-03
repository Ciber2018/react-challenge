import {React} from 'react';
import ButtonCard from './ButtonCard';

const OperationMenu = () => (
    <>  
        <div className='row'>
            <div className='col-xs col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12'>
              <ButtonCard iconClass='tf-icons bx bx-dollar bx-md' text='Pagar Orden'/>
            </div>

            <div className='col-xs col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12'>
              <ButtonCard iconClass='tf-icons bx bx-check-square bx-md' text='Confirmar Orden'/>
            </div>

            <div className='col-xs col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12'>
              <ButtonCard iconClass='tf-icons bx bx-food-menu bx-md' text='Crear Recibo'/>
            </div>

            <div className='col-xs col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12'>
                <ButtonCard iconClass='tf-icons bx bx-x bx-md' customColor={{backgroundColor:'#ff6666',color:'white'}} text='Cancelar Orden'/> 
            </div>           
        </div>      
                               
    </>
)


export default OperationMenu;