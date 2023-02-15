import {React} from 'react';
import Button from './Button';

const Modal = ({closeButton,modalClasses,children}) => (
  <>    
    <div className={modalClasses} databsbackdrop="static" tabIndex="-1" >
              <div className="modal-dialog">
              <form className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <Button buttonType='button' buttonClass='btn-close' handleClick={closeButton} />            
                  </div>
                  <div className="modal-body">
                      {children}
                  </div>
                  <div className="modal-footer">
                      <Button buttonType='button' buttonClass='btn btn-outline-secondary' handleClick={closeButton} buttonText='Cerrar' />   
                      <Button buttonType='button' buttonClass='btn btn-primary' buttonText='Aceptar' />             
                  </div>
              </form>
              </div>
      </div> 
      
</>
)

export default Modal;