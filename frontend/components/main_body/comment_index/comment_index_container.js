import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentIndex from './comment_index';
import { merge } from 'lodash';
import  { createComment, getAllTrackComments, clearErrors } from '../../../actions/comment_actions';

const mapStateToProps = (state, props) => {
  const newComments = Object.values(state.comments);
  const existComments = Object.values(Object.values(state.tracks)[0].comments);
  const totalComments = existComments.concat(newComments);
  return {
    currentUser: state.session.currentUser,
    comments: totalComments.reverse()
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    getAllTrackComments: trackId => dispatch(getAllTrackComments(trackId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
