import {React} from 'react';
import { showAsideMenu } from '../helpers/helper';


const Navbar = (props) => {
   
    return (
        <nav id='layout-navbar' className={props.customClasses}>         

           <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
             
            <a className="nav-item nav-link px-0 me-xl-4" onClick={showAsideMenu}>
                <i className="bx bx-menu bx-sm"></i>
              </a>
             
            </div>

               {props.children}

        </nav>
    )
}

export default Navbar;