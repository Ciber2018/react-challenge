import {React,useState} from 'react';
import Button from './Button';

const Dropdown = ({children}) => {
    const [openDropdown,setOpenDropdown] = useState(false);
    const defaultStyle = {
        position: 'absolute',
        inset: '0px 0px auto auto',
        margin:' 0px',
        transform: 'translate3d(-50.5px, 29.5px, 0px)'        
      };
    return(
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
    )
}

export default Dropdown;