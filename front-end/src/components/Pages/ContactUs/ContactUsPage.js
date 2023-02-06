import React, { useState } from 'react';

import './ContactUs.css';
import FormInput from './FormInput';

import img_work from '../../../img/img_work.jpeg';

function ContactUsPage() {
  const [values, setValues] = useState({
    name: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    text: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      errorMessage: "Name should't include any special character",
      label: 'Nama Lengkap',
      required: true,
    },
    {
      id: 2,
      name: 'businessName',
      type: 'text',
      placeholder: 'Business Name',
      errorMessage: "Name should't include any special character",
      label: 'Nama Bisnis',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Your email should be a valid email address',
      label: 'Email',
      required: true,
    },
    {
      id: 4,
      name: 'phoneNumber',
      type: 'number',
      placeholder: 'Phone number',
      errorMessage: 'Please enter the correct number',
      label: 'Phone Number',
      // pattern: '[A-Za-z]',
      required: true,
    },
    // {
    //   id: 5,
    //   name: 'text',
    //   type: 'text',
    //   placeholder: 'Type here',
    //   errorMessage: 'Please enter your description',
    //   label: 'What do you need?',
    //   // pattern: '[A-Za-z]{3}',
    // },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    setValues('');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h1>Mari Diskusikan Permasalahan</h1>
      <h1>Bisnismu bersama Kami!</h1>
      <div className="row-contact">
        <div className="column-contact">
          <img className="img-contact" src={img_work} />
        </div>
        <div className="column-contact">
          <div className="form-container">
            <form onSubmit={submitHandler}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className="text-area-container">
                <p>
                  <label>
                    Ceritakan permasalahan atau solusi yang ingin kamu
                    beritahukan:
                  </label>
                </p>
                <textarea
                  onChange={onChange}
                  id="5"
                  name="text"
                  rows="4"
                  cols="50"
                  className="text-area-input"
                ></textarea>
              </div>
              <button className="button-contact">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
