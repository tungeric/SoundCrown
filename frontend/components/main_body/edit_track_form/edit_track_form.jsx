import React from 'react';
import { Redirect } from 'react-router-dom';

class EditTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps(newProps) {
    console.log(this.state);
    this.setState(newProps.track);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.updateTrack({track: {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
      }
    });
    this.props.getTrack(this.props.match.params.trackId);
    this.props.history.push(`/tracks/${this.props.track.id}/`);
  }

  renderErrors() {
    return (
      <div>
        <br/>
          <ul>
            {this.props.errors.tracks.map((error, i) => (
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
    console.log(this.state);
    if(this.state){
      return (
        <div className="track-edit-form">
          <div className="form-header"><h1 className="form-label">Edit Track</h1></div>
          <form onSubmit={ this.handleSubmit }>
            <div className="upload-data-container">
              <div className="upload-image">
                <div className="upload-image-preview" style={{backgroundImage: 'url(' + this.state.cover_art_url+ ')'}}>
                </div>
              </div>
              <div className="upload-data">
                <label htmlFor="textInput">Title: </label>
                <input type="text"
                       onChange={ this.update('title') }
                       value={this.state.title}>
                </input>

                <label htmlFor="descriptionInput">Description: </label>
                <textarea type="text"
                       onChange={ this.update('description') }
                       value={this.state.description}>
                </textarea>
                <input type="submit" value="Edit" />
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default EditTrackForm;
