
export function fetchErrMsgData(errorMsg) {
  return {
    type: 'FETCH_ERR_MSG_DATA',
    errorMsg,
  };
}

export function formHasErrored(bool) {
  return {
    type: 'FORM_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function formHasSubmittedSuccess(bool) {
  return {
    type: 'FORM_HAS_SUBMITTED_SUCCESS',
    hasSubmitted: bool,
  };
}
