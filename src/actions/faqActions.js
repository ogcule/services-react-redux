import { SubmissionError, reset } from 'redux-form';
import {
  FETCH_FAQ_SUCCESS,
  CREATE_FAQ_SUCCESS,
  CREATE_FAQ_ERROR,
} from './actionTypes';
import apiFaq from './../api/apiFaq';

export const fetchFAQSuccess = data => (
  {
    type: FETCH_FAQ_SUCCESS,
    questions: data,
    loadedFAQ: true,
  }
);

export const createFAQSuccess = bool => (
  {
    type: CREATE_FAQ_SUCCESS,
    hasSubmittedFAQ: bool,
  }
);

export const createFAQError = bool => (
  {
    type: CREATE_FAQ_ERROR,
    hasErroredFAQ: bool,
  }
);

export const fetchFaq = () => (
  dispatch =>
    apiFaq.requestGet()
      .then((data) => {
        console.log('fetchFaq', data);
        dispatch(fetchFAQSuccess(data));
      })
      .catch(error => console.log(error))
);

export const createFaq = values => (
  dispatch =>
    apiFaq.requestPost(values)
      .then((data) => {
        console.log('Response data from submit call for FAQ', data.data);
        if (typeof data.data.id === 'number') {
          console.log('if statement in FAQ');
          dispatch(createFAQSuccess(true));
          dispatch(reset('FAQ'));
          setTimeout(() => dispatch(createFAQSuccess(false)), 3000);
        }
      })
      .catch((error) => {
        if (error.response.data.validationErrors) {
          console.log('error from submit call in FAQ Container', error.response.data.validationErrors);
          throw new SubmissionError(error.response.data.validationErrors);
        } else {
          console.log('other error', error);
          dispatch(createFAQError(true));
          setTimeout(() => dispatch(createFAQError(false)), 3000);
        }
      })
);
