import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Submit Form</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
