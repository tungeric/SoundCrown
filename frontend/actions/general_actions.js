import {push} from 'react-router-redux';

export const loadSpecificSection = (sectionId) => {
  return (dispatch) => {
    dispatch(push(`/${sectionId}`));
  };
};
