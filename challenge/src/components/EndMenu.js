import {React} from 'react';
import { mobileEndMenuCloseButton } from '../helpers/helper';

const EndMenu = (props) => (
    <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvasEnd"
    aria-labelledby="offcanvasEndLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasEndLabel" className="offcanvas-title">Offcanvas End</h5>
      <button
        type="button"
        className="btn-close text-reset"
        databsdismiss="offcanvas"
        arialabel="Close"
        onClick={(e)=>{            
            mobileEndMenuCloseButton(e);
            setTimeout(() => props.updateContent('accessories'), 300); 
        }}
      ></button>
    </div>
    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
      {props.children}
    </div>
  </div>
)


export default EndMenu;