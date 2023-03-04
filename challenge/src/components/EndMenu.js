import {React} from 'react';
import Button from './Button';
import { CSSTransition } from 'react-transition-group';

const EndMenu = ({open,children,handleCloseEndMenu,title}) => (
  <>
        <CSSTransition
         in={open}
         timeout={3000}
         classNames='endmenu'
                  
         > 
            <div    
              className='offcanvas offcanvas-end'
              tabIndex="-1"
              id="offcanvasEnd"
              aria-labelledby="offcanvasEndLabel"   
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasEndLabel" className="offcanvas-title">{title}</h5>
                <Button
                  buttonType='button'
                  buttonClass='btn-close text-reset'
                  handleClick={handleCloseEndMenu}
                />     
              </div>
              <div className="offcanvas-body my-auto mx-0 flex-grow-0">     
                  {children}     
              </div>
            </div>
            </CSSTransition>
          {
              open &&
              <div className="offcanvas-backdrop fade show"></div>
          } 
  </>
    
)


export default EndMenu;