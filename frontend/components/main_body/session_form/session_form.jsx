import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return (
      <div>
        <br/>
          <ul>
            {this.props.errors.session.map((error, i) => (
                <li key={`error-${i}`}>
                  {error}
                </li>
            ))}
          </ul>
        <br/>
      </div>
    );
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {


    let buttonText="";
    let formAction="";
    if(this.props.action) {
      formAction = "/"+this.props.action;
    } else {
      formAction = this.props.match.path;
    }
    if (formAction==="/login") {
      buttonText = "Sign in";
    } else {
      buttonText = "Sign up";
    }
    const altRoute = {
      route: formAction==="/login" ? "/signup" : "/login",
      text: formAction==="/login" ?
                                "Don't have an account? Sign up" :
                                "Already have an account? Sign in",
    };
    console.log(this.state.username);
    console.log(this.state.password);
    return(
      <div>
        <div className="form-header"><h1 className="form-label">{buttonText}</h1></div>
        { this.renderErrors() }
        <form className="form" onSubmit={ this.handleSubmit }>
          <label>Username:
            <input onChange={ this.update('username') } type="text" value={this.state.username}></input>
          </label>
          <label>Password:
            <input onChange={ this.update('password') } type="password" value={this.state.password}></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to={altRoute.route}>{altRoute.text}</Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
