import React from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormControl from '../../components/form-control/form-control.component';
import ButtonTheme from '../../components/buttons/button-theme.component';

import './signin.styles.scss';

class SignIn extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''});
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="section light_bg flex-grow-1 d-flex flex-column justify-content-center">
        <Container fluid className="d-flex justify-content-center">
          <div className="w_512">
            <div className="section_group group_01">
              <h2 className="section_title">Sign In</h2>
              <p className="section_desc">Get access to your orders, wishlist and recommendations.</p>
            </div>
            <Form className="form_grid_vertical" onSubmit={this.handleSubmit}>
              <FormControl 
                name="email"
                type="email"
                label="Email Address"
                vale={this.state.email}
                onChange={this.handleChange}
              />
              <FormControl 
                name="password"
                type="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <ButtonTheme 
                text="Sign In"
                type="submit"
                className="btn_solid d-flex justify-content-center mt-1 w-100"
              />
              <div class="divider_wrapper">
                <div class="divider_line"></div>
                <div class="divider_text small font_600">OR</div>
              </div>
              <ButtonTheme 
                text="Sign in with Google"
                className="btn_outline d-flex justify-content-center w-100"
              />
              <span className="small font_500">New to GRAPPLE? <Link className="small font_600 decoration" to="/signup">Click here to sign up</Link></span>
            </Form>
          </div>
        </Container>
      </section>
    )
  }
}

export default SignIn;