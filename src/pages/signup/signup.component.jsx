import React from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/section-header/section-header.component';
import FormControl from '../../components/form-control/form-control.component';
import ButtonTheme from '../../components/buttons/button-theme.component';

import './signup.styles.scss';

class SignUp extends React.Component {
  render() {
    return (
      <section className="section light_bg flex-grow-1 d-flex flex-column justify-content-center">
        <Container fluid className="d-flex justify-content-center">
          <div className="w_512">
          <SectionHeader
              description="Get access to your orders, wishlist and recommendations."
              className="group_01"
            >
              <h2 className="title small_title">Sign Up</h2>
            </SectionHeader>
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
              <span className="small">By creating an account, I agree to the <Link className="small font_600 decoration hover_theme">Privacy Policy</Link> and <Link className="small font_600 decoration">Terms & Conditions.</Link></span>
              <ButtonTheme 
                text="Sign Up"
                className="btn_solid d-flex justify-content-center w-100"
              />
              <span className="small font_500">Already have an account? <Link className="small font_600 decoration hover_theme" to="/signin">Click here to sign in</Link></span>
            </Form>
          </div>
        </Container>
      </section>
    )
  }
}

export default SignUp;