import {React} from 'react';


const Navbar = () => {

    const showAsideMenu = () => {
        let html = document.getElementsByTagName('html');        
        html[0].classList.add('layout-transitioning','layout-menu-expanded');        
        setTimeout(()=>{
            html[0].classList.remove('layout-transitioning');
        },2000);
        
    }    

    return (
        <nav id='layout-navbar' className='layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme'>
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
             
            <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)" onClick={showAsideMenu}>
                <i className="bx bx-menu bx-sm"></i>
              </a>
             
            </div>



            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>
            

            </div>
        </nav>
    )
}

export default Navbar;