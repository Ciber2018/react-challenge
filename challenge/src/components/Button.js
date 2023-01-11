import {React} from 'react';

const Button = ({buttonClass,buttonType,buttonText}) => (
    <button className={buttonClass} type={buttonType}>{buttonText}</button>
)

export default Button;