import {React,useState} from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


const Dropdown = ({children,menuItem,text}) => {
    const [openDropdown,setOpenDropdown] = useState(false);
    const defaultStyle = {
        position: 'absolute',
        inset: '0px 0px auto auto',
        margin:' 0px',
        transform: 'translate3d(-50.5px, 29.5px, 0px)'        
    };
    return(
        <>
            {
                !menuItem
                ? 
                    <div style={{'textAlign':'center'}}>
                        <div className="dropdown">
                            <Button 
                                buttonClass='btn btn-sm btn-outline-primary dropdown-toggle' 
                                buttonType='button'                                              
                                handleClick={()=> setOpenDropdown(!openDropdown)} 
                                buttonText='Tipo'
                            />
                            
                            <div className={`dropdown-menu dropdown-menu-end ${openDropdown && 'show'}`} style={defaultStyle}>
                                {children}                               
                            </div>
                        </div>
                    </div>                
                 : 
                
                 
                    <li className={`menu-item`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={()=>setOpenDropdown(!openDropdown)} id={text}>
                            <i className="menu-icon tf-icons bx bx-layout"></i>
                            <div>{text}</div>
                        </Link>                                  
                        <CSSTransition
                          in={openDropdown}
                          timeout={300}
                          classNames='menu-item-dropdown'    
                          mountOnEnter                      
                  > 
                        <ul>                       
                         {children}                                    
                        </ul>
                        </CSSTransition>
                    </li>
                
                    
            }
        </>       
    )
}

export default Dropdown;