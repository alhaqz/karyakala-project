import React, { useState } from 'react';

import './ContactUs.css';
import FormInput from './FormInput';

function ContactUsPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    text: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'Your name',
      type: 'text',
      placeholder: 'Name',
      errorMessage: "Name should't include any special character",
      label: 'Your Name',
      pattern: '[A-Za-z]',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Your email should be a valid email address',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'phoneNumber',
      type: 'number',
      placeholder: 'Phone number',
      errorMessage: 'Please enter the correct number',
      label: 'Phone Number',
      // pattern: '[A-Za-z]',
      required: true,
    },
    {
      id: 4,
      name: 'text',
      type: 'text',
      placeholder: 'Type here',
      errorMessage: 'Please enter your description',
      label: 'What do you need?',
      pattern: '[A-Za-z]',
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="hero-container">
      {/* <h1>This is Contact Us Page!</h1> */}
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <h1>Contact Us</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;