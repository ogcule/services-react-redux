import {
  FORM_HAS_SUBMITTED_SUCCESS,
  FORM_HAS_ERRORED,
  FETCH_ERR_MSG_DATA,
  CURRENT_ROUTE,
} from './actionTypes';

// Actions

// Actions used in all App

export function currentRoute(text) {
  return {
    type: CURRENT_ROUTE,
    text,
  };
}

// Form in services
export function fetchErrMsgData(errorMsg) {
  return {
    type: FETCH_ERR_MSG_DATA,
    errorMsg,
  };
}

export function formHasErrored(bool) {
  return {
    type: FORM_HAS_ERRORED,
    hasErrored: bool,
  };
}

export function formHasSubmittedSuccess(bool) {
  return {
    type: FORM_HAS_SUBMITTED_SUCCESS,
    hasSubmitted: bool,
  };
}
