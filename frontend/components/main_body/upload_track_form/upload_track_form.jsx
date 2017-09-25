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
      fireRestOfForm: false,
      uploadedFileName: null,
      formSubmitted: false
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

  renderLoadingGif() {
    if (this.state.formSubmitted === true) {
      return <div className="loader"></div>;
    } else {
      return <br/>;
    }

  }
  handleSubmit(event) {
    this.setState({formSubmitted: true});
    event.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    formData.append("track[creator_id]", this.state.creator_id);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[cover_art]", this.state.cover_art);
    this.props.createTrack(formData)
      .then(() =>{
        this.props.history.push(`/${this.props.currentUser.username}`);
        this.props.closeModal();
      });
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
      if (data.lengthComputable) {
          let progress = parseInt( ((data.loaded / data.total) * 100), 10 );
      }
    };

    fileReader.onloadend = () => {
      this.setState({ audio: file });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
    this.setState({fireRestOfForm: true});
  }

  renderRestOfForm() {
    if(this.state.fireRestOfForm === true) {
      return (
        <form onSubmit={ this.handleSubmit }>
          <br/>
          <br/>
          <br/>
          <input className="upload-input" type="file" onChange={this.setCoverArt}/>
          <div className="upload-image">
            <img className="upload-image-preview" src={this.state.cover_art_url}/>
            <label htmlFor="track-img-upload" className="track-img-upload-label">
              Choose track cover art
            </label>
            <input id="track-img-upload" type="file" onChange={this.setCoverArt}/>
          </div>
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
        <br/>
        {this.renderLoadingGif()}
        <br/>
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
