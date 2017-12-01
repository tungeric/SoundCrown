import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag
});

export const receiveTagErrors = (errors) => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});

export const getAllTrackTags = (track_id) => dispatch => {
  return TagApiUtil.getTrackTags(track_id)
    .then(response => dispatch(receiveTags(response)),
    errors => dispatch(receiveTagErrors(errors.responseJSON)));
};

export const createTag = (tag) => dispatch => {
  return TagApiUtil.createTag(tag)
    .then(response => dispatch(receiveTag(response)),
    errors => dispatch(receiveTagErrors(errors.responseJSON)));
};

export const deleteTag = (tag) => dispatch => {
  return TagApiUtil.deleteTag(tag)
    .then(response => dispatch(removeTag(response)),
    errors => dispatch(receiveTagErrors(errors.responseJSON)));
};
