import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tags: "",
      description: "",
      creator_id: props.currentUser.id,
      audio: null,
      cover_art_url: "http://res.cloudinary.com/dfafbqoxx/image/upload/v1506546644/blank_user_oltxpb.png",
      cover_art: "http://res.cloudinary.com/dfafbqoxx/image/upload/v1506546644/blank_user_oltxpb.png",
      fireRestOfForm: false,
      uploadedFileName: null,
      formSubmitted: false,
      errors: this.props.errors.tracks || []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAudio = this.setAudio.bind(this);
    this.setCoverArt = this.setCoverArt.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors.tracks, formSubmitted: false});
  }

  componentDidUpdate() {
    if(this.state.creator_id === 0) {
      return <Redirect to="/stream"/>;
    }
  }

  componentWillUnmount() {
      this.props.clearErrors();
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
    this.props.createTrack(formData).then(
      (response) =>{
        if(this.state.errors.length === 0) {
          this.props.history.push(`/${this.props.currentUser.username}`);
          this.props.closeModal();
        }
        console.log(response);
      });
  }

  renderErrors() {
    return (
      <div>
          <ul>
            {this.props.errors.tracks.map((error, i) => (
                <li key={`error-${i}`}>
                  {error}
                </li>
            ))}
          </ul>
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
          {this.renderLoadingGif()}
          <br/>
          <div className="upload-data-container">
            <div className="upload-image">
              <div className="upload-image-preview" style={{backgroundImage: 'url(' + this.state.cover_art_url+ ')'}}>
                <label className="track-img-upload-label">
                  <i className="fa fa-camera"/> Update image
                    <input type="file" onChange={this.setCoverArt}/>
                </label>
              </div>
            </div>
            <div className="upload-data">
              <label htmlFor="textInput">Title: </label>
              <input className="form-text-input"type="text"
                     onChange={ this.update('title') }
                     value={this.state.title}>
              </input>

              <label htmlFor="textInput">Tags (separate by commas): </label>
              <input className="form-text-input" type="text"
                onChange={this.update('tags')}
                value={this.state.tags}>
              </input>

              <label htmlFor="descriptionInput">Description: </label>
              <textarea className="form-textarea" type="text"
                     onChange={ this.update('description') }
                     value={this.state.description}>
              </textarea>
              <input type="submit" value="Upload" />
            </div>
          </div>

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
        {this.renderErrors()}
        <br/>
        <label htmlFor="track-upload" className="track-upload-label">
          {this.state.audio === null ? "Choose a file to upload" : this.state.audio.name}
        </label>
        <input id="track-upload" type="file" onChange={this.setAudio}/>
        { this.renderRestOfForm() }
      </div>
    );
  }
}

export default UploadTrackForm;
