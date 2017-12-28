import React from 'react';
import { Redirect } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';

class UploadTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tags: [],
      tagSuggestions: ["rock","pop", "jazz"],
      trackID: null,
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
    this.createTrack = this.createTrack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
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
    // this.createTags();
    this.createTrack();
  }

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({ tags: tags });
  }

  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({ tags: tags });
  }

  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: tags });
  }

  createTags() {
    this.state.tags.forEach ((tag) => {
      this.props.createTag({ tag: { name: tag.text } }).then(
        (response) => {
          const tagID = parseInt(response.tag.id);
          let tracks = window.getState().tracks;
          const trackID = parseInt(Object.keys(tracks)[Object.keys(tracks).length-1]);
          this.props.createTagging({ tagging: { track_id: trackID, tag_id: tagID } }).then(
            (res) => {
            }
          );
        });
    });
  }

  createTrack() {
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    formData.append("track[creator_id]", this.state.creator_id);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[cover_art]", this.state.cover_art);
    let testing = this.props.createTrack(formData).then(
      (response) => {
        if (this.state.errors.length === 0) {
          this.createTags();
          // this.props.history.push(`/${this.props.currentUser.username}`);
          this.props.closeModal();
        }
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
    const tags = this.state.tags;
    const tagSuggestions = this.state.tagSuggestions;
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

              <label htmlFor="textInput">Tags: </label>
              <div className="tagsContainer">
                <ReactTags 
                  tags={tags}
                  suggestions={tagSuggestions}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                  handleDrag={this.handleDrag} />
              </div>

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
