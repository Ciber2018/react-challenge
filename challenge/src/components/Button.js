import {React} from 'react';

const Button = ({buttonClass,buttonType,buttonText,buttonStyle,buttonId,handleClick,children}) => (
    <button className={buttonClass} id={buttonId} type={buttonType} style={buttonStyle} onClick={handleClick}>{buttonText == '' ? children : buttonText}</button>
)

export default Button;