import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fireRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }


  componentDidUpdate() {
    if(this.state.fireRedirect && this.props.errors.session.length === 0) {
      return <Redirect to="/stream"/>;
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({ fireRedirect: true });
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
    const altRoute = {
      route: this.props.match.path==="/login" ? "/signup" : "/login",
      text: this.props.match.path==="/login" ?
                                "Don't have an account? Sign up" :
                                "Already have an account? Sign in",
    };

    let buttonText="";
    if(this.props !== undefined) {
      if (this.props.match.path.includes("in")) {
        buttonText = "Sign in";
      } else {
        buttonText = "Sign up";
      }
    }
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
