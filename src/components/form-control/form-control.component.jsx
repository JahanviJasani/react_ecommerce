import React from 'react';

import { Form } from 'react-bootstrap';

import './form-control.styles.scss';

const FormControl = ({label, handleChange, ...otherInputProps}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control onChange={handleChange} {...otherInputProps} />
    </Form.Group>
  )
}

export default FormControl;