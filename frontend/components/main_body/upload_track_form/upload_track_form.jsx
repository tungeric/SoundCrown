import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      creator_id: props.currentUser.id,
      // fireRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.creator_id);
    if(this.state.creator_id === 0) {
      return <Redirect to="/stream"/>;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const track = Object.assign({}, this.state);
    this.props.createTrack(track);
    this.setState({ creator_id: 0 });
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-header"><h1 className="form-label">Upload Track</h1></div>
          <br/>
          <label>Title:
            <input type="text"
                   onChange={ this.update('title') }
                   value={this.state.title}>
            </input>
          </label>
          <label>Description:
            <textarea type="text"
                   onChange={ this.update('description') }
                   value={this.state.description}>
            </textarea>
          </label>
          <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}

export default UploadTrackForm;
