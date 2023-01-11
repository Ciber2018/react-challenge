import {React} from 'react';

const Input = ({inputID,inputType,inputClass,inputName,inputPlaceholder,inputFocus,inputText,inputValue,inputOnChangeEvent}) =>(
   <>
        <label htmlFor={inputID} className="form-label">{inputText}</label>
        <input
        type={inputType}
        className={inputClass}
        id={inputID}
        value={inputValue}
        name={inputName}
        onChange={inputOnChangeEvent}
        placeholder={inputPlaceholder}
        autoFocus = {inputFocus}
        />
  </>
)

export default Input;