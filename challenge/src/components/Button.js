import {React} from 'react';

const Button = ({buttonClass,buttonType,buttonText,buttonStyle,buttonId,handleClick,handleOnBlur,children}) => (
    <button className={buttonClass} id={buttonId} type={buttonType} style={buttonStyle} onClick={handleClick} onBlur={handleOnBlur}>
        {buttonText == '' ? children : buttonText}
    </button>
)

export default Button;