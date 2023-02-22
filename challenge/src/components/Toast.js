import React from "react";
import { Transition } from "react-transition-group";
import Button from "./Button";

const Toast = ({show,handleCloseToast}) => {
    const defaultStyles = {
        transition: 'opacity 0.3s ease-in-out, visibility 0.3s',
        opacity: 0,
        visibility: 'hidden',      
        display:'block'
    };

    const transitionStyles = {
        entering: { opacity: 0, visibility: 'hidden'},
        entered: { opacity: 1, visibility: 'visible'},
        exiting: { opacity: 1,visibility: 'visible'},
        exited: { opacity: 0,visibility: 'hidden'},
    };

    return(
        <Transition
        in={show}
        timeout={50}
        >
            {
                (state)=>(
                    <div className={`bs-toast toast toast-placement-ex m-2 fade bg-info top-0 end-0 `} style={{
                        ...defaultStyles,
                        ...transitionStyles[state]
                        }} 
                        role="alert" arialive="assertive" ariaatomic="true" datadelay="2000"
                        >
                        <div className="toast-header">
                            <i className="bx bx-bell me-2"></i>
                            <div className="me-auto fw-semibold">Bootstrap</div>
                            <small>11 mins ago</small>
                            <Button buttonType='button' buttonClass="btn-close" handleClick={handleCloseToast}/>
                           
                        </div>
                        <div className="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
                    </div>
                )

            }
            
        </Transition>
    )
    
}

export default Toast;