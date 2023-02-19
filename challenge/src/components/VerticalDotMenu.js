import {React,useState} from 'react';
import Button from './Button';

const VerticalDotMenu = ({children}) => {
    let [openVerticalDotMenu,setOpenVerticalDotMenu] = useState(false);
    const defaultStyle = {
        position: 'absolute',
        inset: '0px 0px auto auto',
        margin: '0px',
        transform: 'translate3d(0.5px, 27px, 0px)'
      };
    return(
        <div className='col-sm-6 col-md-6 col-lg-6'>
                <div className='dropdown'>
                    <Button 
                    buttonClass={`custom-btn p-0 ${openVerticalDotMenu && 'show'}`}
                    buttonType='button' 
                    buttonStyle={{float:'right'}} 
                    handleClick={()=>setOpenVerticalDotMenu(!openVerticalDotMenu)} 
                    buttonText={<i className="bx bx-dots-vertical-rounded"></i>}
                    />                            
                    <div className={`dropdown-menu dropdown-menu-end ${openVerticalDotMenu && 'show'}`} style={defaultStyle}>
                        {children}                                                    
                    </div>
                </div>
        </div>  
    )
   
}

export default VerticalDotMenu;