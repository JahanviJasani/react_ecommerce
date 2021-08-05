import React from 'react';

import { Form } from 'react-bootstrap';

import './form-control.styles.scss';

const FormControl = ({type, ...otherInputProps}) => {
  return (
    <Form.Group>
      <Form.Label>{otherInputProps.label}</Form.Label>
      <Form.Control type={type} />
    </Form.Group>
  )
}

export default FormControl;