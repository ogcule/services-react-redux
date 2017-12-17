import apiServices from './../api/apiServices';
import defaultFormValues from './../utils/defaultFormValues';
import {
  FETCH_INVALID_MESSAGES,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_ERROR,
  GET_FILTERED_TAGS_SUCCESS,
  GET_FILTERED_BOTH_SUCCESS,
  GET_FILTERED_CATEGORY_SUCCESS,
} from './actionTypes';
// action creator
// concise body syntax, implied "return",
// with block body, explicit "return" needed AirBnB eslint
// likes concise body syntax, redux tutorial uses block body.
export const createServiceSuccess = service => (
  {
    type: CREATE_SERVICE_SUCCESS,
    service,
  }
);

export const createServiceError = bool => (
  {
    type: CREATE_SERVICE_ERROR,
    hasErrored: bool,
  }
);

export const fetchInvalidMessages = invalidMsgs => (
  {
    type: FETCH_INVALID_MESSAGES,
    invalidMsgs,
  }
);

export const getFilteredTagsSuccess = (data, tags) => (
  {
    type: GET_FILTERED_TAGS_SUCCESS,
    filter: {
      filteredServices: data,
      tags,
      loaded: true,
      filteredView: true,
    },
  }
);

export const getFilteredBothSuccess = (category, tags, data) => (
  {
    type: GET_FILTERED_BOTH_SUCCESS,
    filter: {
      filteredServices: data,
      tags,
      category,
      loaded: true,
      filteredView: true,
    },
  }
);

export const getFilteredCategorySuccess = (category, tags, data) => (
  {
    type: GET_FILTERED_CATEGORY_SUCCESS,
    filteredServices: data,
    category,
    tags,
  }
);

// Async action, a function that returns a
// dispatcher function that dipatches an ation
// at a later time.
// Again used concise body syntax which is what AirBnB likes
export const getFilteredBoth = (category, tags) => (
  dispatch =>
    apiServices.requestGetBoth(category, tags)
      .then(data => dispatch(getFilteredBothSuccess(category, tags, data)))
      .catch(err => console.log(err.message))
);

export const createService = values => (
  dispatch =>
    apiServices.requestPost(...defaultFormValues(values))
      .then((data) => {
        console.log('Response data from submit call in ServicesContainer', data);
        /* data from requstPost is either an error message(object)
        or returned id number if successful */
        if (typeof data !== 'number') {
          dispatch(fetchInvalidMessages(data));
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(createServiceError(true));
      })
);

export const getFilteredTags = tags => (
  dispatch =>
    apiServices.requestGetTags(tags)
      .then(data => dispatch(getFilteredTagsSuccess(data, tags)))
      .catch(error => console.log(error.message))
);

export const getFilteredCategory = (category, tags) => (
  dispatch =>
    apiServices.requestGetCategory(category)
      .then(data => dispatch(getFilteredCategorySuccess(category, tags, data)))
      .catch(error => console.log(error.message))
);
