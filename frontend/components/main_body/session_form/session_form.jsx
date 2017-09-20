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
    // console.log(Boolean(this.state.fireRedirect && this.props.errors.session.length === 0));
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
      <ul>
        {this.props.errors.session.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  renderOtherLink() {
    switch(this.props.formType) {
      case 'login':
        return <Link to="/signup">No account? Sign up</Link>;
      case 'signup':
        return <Link to="/login">Have an account? Log in</Link>;
    }
  }

  render() {
    return(
      <div>
        { this.renderErrors() }
        <form onSubmit={ this.handleSubmit }>
          <label>Username:
            <input onChange={ this.update('username') } type="text" value={this.state.username}></input>
          </label>
          <label>Password:
            <input onChange={ this.update('password') } type="password" value={this.state.password}></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.renderOtherLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
