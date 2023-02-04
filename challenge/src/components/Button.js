import {React} from 'react';

const Button = ({buttonClass,buttonType,buttonText,handleClick}) => (
    <button className={buttonClass} type={buttonType} onClick={handleClick}>{buttonText}</button>
)

export default Button;