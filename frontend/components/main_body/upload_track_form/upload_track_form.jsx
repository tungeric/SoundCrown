import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      creator_id: props.currentUser.id,
      audio: null,
      cover_art_url: "http://res.cloudinary.com/dfafbqoxx/image/upload/v1505940306/soundcrown-logo_ueiofl.jpg",
      cover_art: null
      // fireRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAudio = this.setAudio.bind(this);
    this.setCoverArt = this.setCoverArt.bind(this);
  }

  componentDidUpdate() {
    if(this.state.creator_id === 0) {
      return <Redirect to="/stream"/>;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    formData.append("track[creator_id]", this.state.creator_id);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[cover_art]", this.state.cover_art);
    console.log(this.state);
    this.props.createTrack(formData);
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

  setCoverArt (event) {
    const file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ cover_art_url: fileReader.result, cover_art: file });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  setAudio (event) {
    const file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audio: file });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-header"><h1 className="form-label">Upload Track</h1></div>
          <br/>
          {this.renderErrors()}
          <label>Upload Cover Art<input className="upload-input" type="file" onChange={this.setCoverArt}/></label>
          <label>Upload Track<input className="upload-input" type="file" onChange={this.setAudio}/></label>
          <img className="upload-image-preview" src={this.state.cover_art_url}/>
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
