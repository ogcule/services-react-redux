// import { SubmissionError } from 'redux-form';
import apiServices from './../api/apiServices';
import defaultFormValues from './../utils/defaultFormValues';
import {
  FETCH_INVALID_MESSAGES,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_ERROR,
  GET_FILTERED_TAGS_SUCCESS,
  GET_FILTERED_BOTH_SUCCESS,
  GET_FILTERED_CATEGORY_SUCCESS,
  GET_SEARCHED_SERVICES_SUCCESS,
  RESET_INVALID_MESSAGES,
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
    hasInvalidMsgs: true,
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

export function resetInvalidMessages(bool) {
  return {
    type: RESET_INVALID_MESSAGES,
    hasInvalidMsgs: bool,
  };
}
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

// export const createService = values => (
//   dispatch =>
//     apiServices.requestPost(...defaultFormValues(values))
//       .then((data) => {
//         console.log('Response data from submit call in ServicesContainer', data);
//         /* data from requstPost is either an error message(object)
//         or returned id number if successful */
//         if (typeof data !== 'number') {
//           // dispatch(fetchInvalidMessages(data));
//           throw new SubmissionError(data);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         dispatch(createServiceError(true));
//       })
// );

export const createService = values => (
  dispatch =>
    apiServices.requestPost(...defaultFormValues(values))
      .then((data) => {
        console.log('Response data from submit call in ServicesContainer', data);
        /* data from requstPost is either an error message(object)
        or returned id number if successful */
        // if (typeof data !== 'number') {
        //   // dispatch(fetchInvalidMessages(data));
        //   console.log('throw error');
        //   throw new SubmissionError(data);
        // }
      })
      .catch((error) => {
        console.log('error from submit call in ServicesContainer', error.response.data.error);
        // if (typeof error !== 'number') {
        //   // dispatch(fetchInvalidMessages(data));
        //   console.log('throw error');
        //   throw new SubmissionError(data);
        // }
        dispatch(createServiceError(true));
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
