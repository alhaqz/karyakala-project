import React, { useState } from 'react';

import './FormInput.css';

function FormInput(props) {
  const [isFocused, setIsFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const focusHandler = (e) => {
    setIsFocused(true);
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
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
