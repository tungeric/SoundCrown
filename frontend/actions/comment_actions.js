import * as CommentApiUtil from '../util/track_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const getAllTrackComments = (track_id) => dispatch => {
  return CommentApiUtil.getTrackComments(track_id)
    .then( response => dispatch(receiveComments(response)),
           errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};

export const createComment = (comment) => dispatch => {
  return CommentApiUtil.createComment(comment)
    .then( response => dispatch(receiveComment(response)),
           errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};

export const deleteComment = (comment) => dispatch => {
  return CommentApiUtil.deleteComment(comment)
    .then( response => dispatch(removeComment(response)),
           errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};
