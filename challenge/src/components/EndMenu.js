import {React} from 'react';
import Button from './Button';

const EndMenu = (props) => (
    <div    
    className='offcanvas offcanvas-end'
    tabIndex="-1"
    id="offcanvasEnd"
    aria-labelledby="offcanvasEndLabel"   
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasEndLabel" className="offcanvas-title">Offcanvas End</h5>
      <Button
        buttonType='button'
        buttonClass='btn-close text-reset'
        handleClick={props.handleCloseEndMenu}
      />     
    </div>
    <div className="offcanvas-body my-auto mx-0 flex-grow-0">     
        {props.children}     
    </div>
  </div>
)


export default EndMenu;