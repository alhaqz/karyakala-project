import React, { useState } from 'react';

import './FormInput.css';

function FormInput(props) {
  const [isFocused, setIsFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const focusHandler = (e) => {
    setIsFocused(true);
  };

  return (
    <div
      className={'form-input' + (inputProps.name === 'text' ? '-large' : '')}
    >
      <label>{label}</label>
      <input
        {...inputProps}
        // {()=> inputProps.name === 'text' && className={'form-input-large'} : ''}
        onChange={onChange}
        onBlur={focusHandler}
        onFocus={() => inputProps.name === 'text' && setIsFocused(true)}
        focused={isFocused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
