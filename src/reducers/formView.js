// reducers and state for the submission form to add
// a service to database, state needs to hold any error messages.
const initalState = {
  formOpen: false,
  hasErrored: false,
  hasSubmitted: false,
  loaded: false,
};

const formView = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return Object.assign({}, state, {
        formOpen: !state.formOpen,
      });
    case 'CREATE_SERVICE_SUCCESS':
      return Object.assign({}, state, {
        hasSubmitted: action.hasSubmitted,
      });
    case 'CREATE_SERVICE_ERROR':
      return Object.assign({}, state, {
        hasErrored: action.hasErrored,
      });
    default:
      return state;
  }
};

export default formView;
