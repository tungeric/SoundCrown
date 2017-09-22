import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadTrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      creator_id: props.currentUser.id,
      audio: null
      // fireRedirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAudio = this.setAudio.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.creator_id);
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
    console.log(formData.get("track[title]"));
    console.log(this.state);
    if (this.state.audio) {
      formData.append("track[audio]", this.state.audio);
      console.log(formData);
      this.props.createTrack(formData);
    }
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  setAudio (event) {
    const file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audio: file });
    };
    // if (file) {
    //   fileReader.readAsDataURL(file);
    // }

  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-header"><h1 className="form-label">Upload Track</h1></div>
          <br/>
          <input className="upload-input" type="file" onChange={this.setAudio}/>
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
