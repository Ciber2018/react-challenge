import {React} from 'react';

const Button = ({buttonClass,buttonType,buttonText,buttonStyle,buttonId,handleClick}) => (
    <button className={buttonClass} id={buttonId} type={buttonType} style={buttonStyle} onClick={handleClick}>{buttonText}</button>
)

export default Button;