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
      cover_art: null,
      fireRedirect: false,
      uploadedFileName: null
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
    this.setState({uploadedFileName: file.name});
    let fileReader = new FileReader();

    fileReader.onprogress = function(data) {
      console.log(data.total);
      if (data.lengthComputable) {
          let progress = parseInt( ((data.loaded / data.total) * 100), 10 );
          console.log(progress);
      }
    };
    
    fileReader.onloadend = () => {
      this.setState({ audio: file });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
    this.setState({fireRedirect: true});
  }

  renderRestOfForm() {
    if(this.state.fireRedirect === true) {
      return (
        <form onSubmit={ this.handleSubmit }>
          <br/>
          <a>Uploading {this.state.uploadedFileName}...</a>
          <br/>
          <input className="upload-input" type="file" onChange={this.setCoverArt}/>
          <img className="upload-image-preview" src={this.state.cover_art_url}/>
          <label htmlFor="track-img-upload" className="track-img-upload-label">
            Choose track cover art
          </label>
          <input id="track-img-upload" type="file" onChange={this.setCoverArt}/>
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
      );
    } else {
      return <div></div>;
    }
  }

  render () {

    return (
      <div className="track-upload-form">
        <div className="form-header"><h1 className="form-label">Upload to SoundCrown</h1></div>
        <br/><br/><br/>
          <label htmlFor="track-upload" className="track-upload-label">
            Choose a file to upload
          </label>
          <input id="track-upload" type="file" onChange={this.setAudio}/>
        { this.renderRestOfForm() }
      </div>
    );
  }
}

export default UploadTrackForm;
