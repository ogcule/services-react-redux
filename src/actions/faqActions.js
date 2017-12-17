import { FETCH_FAQ_SUCCESS } from './actionTypes';
import apiFaq from './../api/apiFaq';

export const fetchFAQSuccess = (faq) => {
  return {
    type: 'FETCH_FAQ_SUCCESS',
    faq,
    loaded: true,
  }
};

export const fetchFaq = () {
  return (dispatch) => {
    return apiFaq.requestGet()
      .then( data => {
        dispatch(fetchFAQSuccess(data))
      })
      .catch(error => {
        throw(error);
      });
  }
}
