import {React} from 'react';

const Input = ({inputID,inputType,inputClass,inputName,inputPlaceholder,inputFocus,inputText,inputValue,inputOnChangeEvent,enableLabel,customStyle,inputCheck,inputDisabled}) =>(
   <>
        {
            enableLabel && <label htmlFor={inputID} className="form-label">{inputText}</label>
        }         
        <input
        type={inputType}
        className={inputClass}
        id={inputID}
        value={inputValue}
        name={inputName}
        onChange={inputOnChangeEvent}
        placeholder={inputPlaceholder}
        autoFocus = {inputFocus}
        style={customStyle}
        checked={inputCheck}
        disabled={inputDisabled}
        />
  </>
)

export default Input;