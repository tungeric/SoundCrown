import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        body: "",
        track_id: this.props.match.params.trackId,
        author_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.props.createComment({comment: this.state});
    }
  }

  update(field) {
    console.log(this.state);
    return event => this.setState({ [field]: event.target.value });
  }

  render () {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="comment-form-container">
        <div className="user-avatar-small" style={{backgroundImage: 'url(' + this.props.currentUser.avatar_url+ ')'}}></div>
        <input type="text"
               className="comment_form_textbox"
               placeholder="Write a comment"
               onChange={this.update('body')}
               onKeyUp={this.handleSubmit}>
        </input>
      </div>
    );
  }
}

export default CommentForm;
