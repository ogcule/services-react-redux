// reducers and state for the submission form to add
// a service to database, state needs to hold any error messages.
const initalState = {
  formOpen: false,
  hasErrored: false,
  invalidMsgs: {
    name: '',
    description: '',
    telephone: '',
    postcode: '',
    email: '',
    weblink: '',
    image: '',
    tags: '',
  },
  hasSubmitted: false,
  loaded: false,
};

const formView = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return Object.assign({}, state, {
        formOpen: !state.formOpen,
      });
    case 'FETCH_INVALID_MESSAGES':
      return Object.assign({}, state, {
        invalidMsgs: {
          ...action.invalidMsgs,
        },
      });
    case 'CREATE_SERVICE_SUCCESS':
      return Object.assign({}, state, {
        hasSubmitted: true,
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
