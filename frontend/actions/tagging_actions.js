import * as TaggingApiUtil from '../util/tagging_api_util';

export const RECEIVE_TAGGINGS = "RECEIVE_TAGS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";
export const RECEIVE_TAGGING_ERRORS = "RECEIVE_TAGGING_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveTaggings = (taggings) => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

export const receiveTagging = (tagging) => ({
  type: RECEIVE_TAGGING,
  tagging
});

export const removeTagging = (tagging) => ({
  type: REMOVE_TAGGING,
  tagging
});

export const receiveTaggingErrors = (errors) => ({
  type: RECEIVE_TAGGING_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});

export const createTagging = (tagging) => dispatch => {
  return TaggingApiUtil.createTag(tagging)
    .then(response => dispatch(receiveTagging(response)),
    errors => dispatch(receiveTaggingErrors(errors.responseJSON)));
};

export const deleteTagging = (tagging) => dispatch => {
  return TaggingApiUtil.deleteTag(tagging)
    .then(response => dispatch(removeTagging(response)),
    errors => dispatch(receiveTaggingErrors(errors.responseJSON)));
};
