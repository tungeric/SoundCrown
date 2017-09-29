import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        body: "",
        track_id: this.props.match.params.trackId,
        author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAllTrackComments(this.props.match.params.trackId);
  }

  // componentWillUpdate(nextProps) {
  //   if(nextProps.comments.length !== this.props.comments.length) {
  //     this.props.getAllTrackComments(this.props.match.params.trackId);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.props.createComment({comment: this.state})
      .then(() => {
        this.setState({body: ''});
      });
    }
  }

  update(field) {
    return event => this.setState({ body: event.target.value });
  }

  renderElapsedTime(comment) {
    let seconds = Math.floor((new Date().getTime() - comment.created_at) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  render () {
    const { comments, currentUser } = this.props;
    if (!currentUser) {
      return null;
    }

    let trackComments = comments.map((comment, i) => {
      return (
        <li className="comment-item" key={i}>
          <div className="comment-container">
            <Link to={`/${comment.author.username}`}>
              <img className="comment-author-img" src={comment.author.avatar_url}></img>
            </Link>
            <div className="comment-user-and-body">
              <Link className="comment-author" to={`/${comment.author.username}`}>
                {comment.author.username}
              </Link>
              <div>{comment.body}</div>
            </div>
            <div className="comment-elapsed-time">{ this.renderElapsedTime(comment)} ago</div>
          </div>
        </li>
      );
    });
    if (trackComments.length === 0) {
      trackComments = <div>Be the first to comment on this track!</div>;
    }

    return(
      <div className="track-comments-section">
        <div className="comment-form-container">
          <div className="user-avatar-small" style={{backgroundImage: 'url(' + this.props.currentUser.avatar_url+ ')'}}></div>
          <input type="text"
                 className="comment_form_textbox"
                 placeholder="Write a comment"
                 onChange={this.update()}
                 onKeyUp={this.handleSubmit}
                 value = {this.state.body}>
          </input>
        </div>
        <div className="comment-list-container">
          <ul className="track-comments-list">
            {trackComments}
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentIndex;
