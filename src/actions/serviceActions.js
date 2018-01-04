import { SubmissionError, reset } from 'redux-form';
import apiServices from './../api/apiServices';
import defaultFormValues from './../utils/defaultFormValues';
import {
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_ERROR,
  GET_FILTERED_TAGS_SUCCESS,
  GET_FILTERED_BOTH_SUCCESS,
  GET_FILTERED_CATEGORY_SUCCESS,
  GET_SEARCHED_SERVICES_SUCCESS,
} from './actionTypes';
// action creator
// concise body syntax, implied "return",
// with block body, explicit "return" needed AirBnB eslint
// likes concise body syntax, redux tutorial uses block body.
export const createServiceSuccess = bool => (
  {
    type: CREATE_SERVICE_SUCCESS,
    hasSubmitted: bool,
  }
);

export const createServiceError = bool => (
  {
    type: CREATE_SERVICE_ERROR,
    hasErrored: bool,
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

export const getFilteredCategorySuccess = (category, data) => (
  {
    type: GET_FILTERED_CATEGORY_SUCCESS,
    filter: {
      filteredServices: data,
      category,
      tags: '',
      loaded: true,
      filteredView: true,
    },
  }
);

export const getSearchedServicesSuccess = data => (
  {
    type: GET_SEARCHED_SERVICES_SUCCESS,
    filter: {
      filteredServices: data,
      loaded: true,
      filteredView: true,
    },
    menuOverlay: false,
    searchBox: false,
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
        console.log('Response data from submit call in ServicesContainer', data.data);
        if (typeof data.data === 'number') {
          console.log('if statement');
          dispatch(createServiceSuccess(true));
          dispatch(reset('service'));
          setTimeout(() => dispatch(createServiceSuccess(false)), 3000);
        }
      })
      .catch((error) => {
        if (error.response.data.validationErrors) {
          console.log('error from submit call in ServicesContainer', error.response.data.validationErrors);
          throw new SubmissionError(error.response.data.validationErrors);
        } else {
          dispatch(createServiceError(true));
          setTimeout(() => dispatch(createServiceError(false)), 3000);
        }
      })
);

export const getFilteredTags = tags => (
  dispatch =>
    apiServices.requestGetTags(tags)
      .then((data) => {
        console.log(tags, data);
        dispatch(getFilteredTagsSuccess(data, tags));
      })
      .catch(error => console.log(error.message))
);

export const getFilteredCategory = category => (
  dispatch =>
    apiServices.requestGetCategory(category)
      .then((data) => {
        console.log(category, data);
        dispatch(getFilteredCategorySuccess(category, data));
      })
      .catch(error => console.log(error.message))
);

export const getSearchedServices = text => (
  dispatch =>
    apiServices.requestGetSearch(text)
      .then((data) => {
        console.log(`searched data: ${data}`);
        dispatch(getSearchedServicesSuccess(data));
      })
      .catch(error => console.log(error.message))
);
