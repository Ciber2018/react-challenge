import {React} from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


const OperationMenu = () => {
  let navigate = useNavigate();

  const btnCancel = () => {
    navigate('/sale');
  }

  return(
    <>  
        <div className='row alig-center'>          

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bot-pad'>              
              <Button buttonType="button" buttonClass="btn btn-xl btn-outline-primary" buttonText='Confirmar' buttonStyle={{width:200}}/>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bot-pad'>              
              <Button buttonType="button" buttonClass="btn btn-xl btn-outline-primary" buttonText='Pagar' buttonStyle={{width:200}}/>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bot-pad'>
              <Button buttonType="button" buttonClass="btn btn-xl btn-outline-primary" buttonText='Recibo' buttonStyle={{width:200}}/>              
            </div>

            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bot-pad'>
              <Button buttonType="button" buttonClass="btn btn-xl btn-outline-danger" buttonText='Cancelar' buttonStyle={{width:200}} handleClick={btnCancel}/>                
            </div>           
        </div>      
                               
    </>
  )
    
}


export default OperationMenu;