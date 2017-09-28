import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import  { createComment, clearErrors } from '../../../actions/comment_actions';

const mapStateToProps = (state, props) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
