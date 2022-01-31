import React from "react";

// CSS
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isSubmitted: false,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
      isSubmitted: true,
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value,
      isSubmitted: true,
    });
  }

  handleSubmit(e) {
    console.log(
      "Your email is" +
        this.state.email +
        "Your password is" +
        this.state.password +
        "are submitted"
    );
    e.preventDefault();
  }

  render() {
    return (
      <form className="was-validated" onSubmit={this.handleSubmit}>
        <label> Email: </label>
        <input
          type="text"
          className="form-control is-invalid p-2 m-2 w-50"
          value={this.state.email}
          onChange={this.handleEmail}
        />

        <label> Password: </label>
        <input
          type="password"
          className="form-control is-invalid p-2 m-2 w-50"
          value={this.state.password}
          onChange={this.handlePassword}
        />

        <input
          type="checkbox"
          className="p-2 m-2"
          value="remember-me"
          id="remember_me"
        />
        Remember me
        <input
          type="submit"
          className="p-2 m-2"
          value="Submit"
          onChange={this.handleSubmit}
        />
      </form>
    );
  }
}
export default App;
