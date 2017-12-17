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
    case 'GET_FILTERED_TAGS_SUCCESS':
      return Object.assign({}, state, {
        filter: {
          ...state.formView.filter,
          filteredServices: action.filter.filteredServices,
          tags: action.filter.tags,
          loaded: true,
          filteredView: true,
        },
        searchBox: false,
      });
    case 'GET_FILTERED_BOTH_SUCCESS':
      return Object.assign({}, state, {
        filter: {
          ...state.formView.filter,
          filteredServices: action.filter.filteredServices,
          tags: action.filter.tags,
          category: action.filter.category,
          loaded: true,
          filteredView: true,
        },
        searchBox: false,
      });
    case 'GET_FILTERED_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        filter: {
          ...state.filter,
          filteredServices: action.filter.filteredServices,
          tags: action.filter.tags,
          category: action.filter.category,
          loaded: true,
        },
        searchBox: false,
      });
    default:
      return state;
  }
};

export default formView;
