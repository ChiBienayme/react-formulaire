import React from "react"

// CSS
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
			email: "",
      password: "",
      isSubmitted: false,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.email,
      password: e.target.password,
    })
  }

  handleSubmit(e) {
		console.log('Your email is' + this.state.email + "Your password is" + this.state.password + 'are submitted');
    e.preventDefault();
	}


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Email: </label>
        <input type="text" class="form-control p-2 m-2" value={this.state.email} onChange={this.handleChange} />

        <label> Password: </label>
        <input type="password" class="form-control p-2 m-2" value={this.state.password} onChange={this.handleChange} />

        <input type="checkbox" class="p-2 m-2" value="remember-me" id="remember_me"/>  Remember me

        <input type="submit" class="p-2 m-2" value="Submit"
        onChange={this.handleSubmit}/>

      </form>

               
    ) 
  }
}
export default App