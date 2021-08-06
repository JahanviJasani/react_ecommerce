import React from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormControl from '../../components/form-control/form-control.component';
import ButtonSolid from '../../components/buttons/button-solid.component';

import './signup.styles.scss';

class SignUp extends React.Component {
  render() {
    return (
      <section className="section light_bg flex-grow-1 d-flex flex-column justify-content-center">
        <Container fluid className="d-flex justify-content-center">
          <div className="w_512">
            <div className="section_group group_01">
              <h2 className="section_title">Sign Up</h2>
              <p className="section_desc">Get access to your orders, wishlist and recommendations.</p>
            </div>
            <Form className="form_grid_vertical">
              <FormControl 
                type="email"
                label="Email Address"
              />
              <FormControl 
                type="password"
                label="Password"
              />
              <FormControl 
                type="password"
                label="Confirm Password"
              />
              <ButtonSolid 
                text="Sign Up"
                class="d-flex justify-content-center mt-1 w-100"
              />
              <span className="small">By creating an account, you agree to our <Link className="small font_600 decoration">Privacy Policy</Link> and <Link className="small font_600 decoration">Terms & Conditions.</Link>
              </span>
            </Form>
          </div>
        </Container>
      </section>
    )
  }
}

export default SignUp;