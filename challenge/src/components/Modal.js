import {React} from 'react';
import Button from './Button';
import { CSSTransition } from 'react-transition-group';


const Modal = ({closeButton,children,openModal,title,handleAcceptBtn}) => {  

    return(
        <>    
            <CSSTransition        
                    in={openModal}
                    className={`modal modalanim fade ${openModal && 'show'}`}
                    timeout={800}       
                    mountOnEnter
            >
                <div databsbackdrop="static" tabIndex="-1" >
                        <div className="modal-dialog">
                        <form className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <Button buttonType='button' buttonClass='btn-close' handleClick={closeButton} />            
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                            <div className="modal-footer">
                                <Button buttonType='button' buttonClass='btn btn-outline-secondary' handleClick={closeButton} buttonText='Cerrar' />   
                                <Button buttonType='button' buttonClass='btn btn-primary' buttonText='Aceptar' handleClick={handleAcceptBtn}/>             
                            </div>
                        </form>
                        </div>
                </div> 
            </CSSTransition>  
            {
                openModal &&
                <div className='modal-backdrop fade show'></div>        
            
            }
           
            
        </>
    )

 
}

export default Modal;