import {React, useEffect, useRef} from 'react';

const Button = ({buttonClass,buttonType,buttonText,buttonStyle,buttonId,handleClick,handleOnBlur,children,isOpen}) => {
  const btnRef = useRef(null);

  useEffect(() => {
    
    if (isOpen) {
        btnRef.current.focus();
    }
    
  })  

  return(
        <button className={buttonClass} id={buttonId} type={buttonType} style={buttonStyle} onClick={handleClick} onBlur={() => !isOpen && handleOnBlur} ref={btnRef}>
            {buttonText == '' ? children : buttonText}
        </button>
    )  
}

export default Button;