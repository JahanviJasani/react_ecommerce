import React from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/section-header/section-header.component'
import FormControl from '../../components/form-control/form-control.component';
import ButtonTheme from '../../components/buttons/button-theme.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

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
            <SectionHeader
              description="Get access to your orders, wishlist and recommendations."
              className="group_01"
            >
              <h2 className="title small_title">Sign In</h2>
            </SectionHeader>
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
              <div className="divider_wrapper">
                <div className="divider_line"></div>
                <div className="divider_text small font_600">OR</div>
              </div>
              <ButtonTheme 
                text="Sign in with Google"
                className="btn_outline d-flex justify-content-center w-100"
                onClick={signInWithGoogle}
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