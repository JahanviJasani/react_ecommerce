import React from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import FormControl from '../../components/form-control/form-control.component';
import ButtonSolid from '../../components/buttons/button-solid.component';
import ButtonOutline from '../../components/buttons/button-outline.component';

import './signin.styles.scss';

class SignIn extends React.Component {
  render() {
    return (
      <section className="section light_bg flex-grow-1 d-flex flex-column justify-content-center">
        <Container fluid className="d-flex justify-content-center">
          <div className="w_512">
            <div className="section_group group_01">
              <h2 className="section_title">Sign In</h2>
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
              <ButtonSolid 
                text="Sign In"
                class="d-flex justify-content-center mt-1 w-100"
              />
              <div class="divider_wrapper">
                <div class="divider_line"></div>
                <div class="divider_text small font_600">OR</div>
              </div>
              <ButtonOutline 
                text="Sign in with Google"
                class="d-flex justify-content-center w-100"
              />
            </Form>
          </div>
        </Container>
      </section>
    )
  }
}

export default SignIn;