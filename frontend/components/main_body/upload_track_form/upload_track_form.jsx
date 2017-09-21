import React from 'react';

class UploadTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      fireRedirect: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const track = Object.assign({}, this.state);
    this.props.createTrack(track);
    this.setState({ fireRedirect: true });
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>Title:
            <input type="text"
                   onChange={ this.update('title') }
                   value={this.state.title}>
            </input>
          </label>
          <label>Title:
            <textarea type="text"
                   onChange={ this.update('description') }
                   value={this.state.description}>
            </textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default UploadTrackForm;
