import {React,useState,Children} from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';


const Dropdown = ({children,menuItem,text}) => {
    const [openDropdown,setOpenDropdown] = useState(false);

    const count = Children.count(children);
    
    const defaultStyle = {
        position: 'absolute',
        inset: '0px 0px auto auto',
        margin:' 0px',
        transform: 'translate3d(-50.5px, 29.5px, 0px)'        
    };

    const defaultMenuStyles = {
        transition: `height 0.3s ease-in-out`,        
        height:0
    }  

    const transitionMenuStyles = {
        entering: { height: 0},
        entered: { height: (count * 40) + 10},
        exiting: { height: (count * 40) + 10},
        exited: { height: 0},
    };

    
    const defaultUlStyles = {
        transition: `height 0.3s ease-in-out, visibility 0.3s`,
        visibility: 'hidden',        
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        overflow:'hidden',
        height: 0
        
    }    

    const transitionUlStyles = {
        entering: { visibility:'hidden',height: 0},
        entered: { visibility:'visible',height: count * 40},
        exiting: { visibility:'visible',height: count * 40},
        exited: { visibility:'hidden',height: 0},
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
                                 
                 <li className={`menu-item ${openDropdown && 'open'}`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={()=>setOpenDropdown(!openDropdown)} id={text}>
                            <i className="menu-icon tf-icons bx bx-layout"></i>
                            <div>{text}</div>                            
                        </Link>                                  
                        <Transition
                        in={openDropdown}
                        timeout={150}                                      
                        > 
                        {(state) => (     
                            
                            <div
                            style={{
                                ...defaultMenuStyles,
                                ...transitionMenuStyles[state]
                                }}
                            >    

                             <ul className='menu-sub'                            
                            style={{
                                ...defaultUlStyles,
                                ...transitionUlStyles[state]
                                }}
                            >                       
                             {children}                                    
                            </ul>
                            </div>                                            
                                                    
                            )}                          
                        
                        </Transition>
                       
                 </li>
               
            }
        </>       
    )
}

export default Dropdown;