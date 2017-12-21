// reducers and state for retrieving services
// from api and filtering and displaying them.
const initalState = {
  displayCategories: false,
  tagMenu: false,
  filter: {
    category: '',
    tags: '',
    filteredServices: {},
    search: '',
    loaded: false,
    filteredView: false,
    searchErr: false,
  },
  menuOverlay: false,
  searchBox: true,
};

const services = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_FILTERED_TAGS_SUCCESS':
      return Object.assign({}, state, {
        filter: {
          ...state.filter,
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
          ...state.filter,
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
          filteredView: true,
        },
        searchBox: false,
      });
    case 'TOGGLE_DISPLAY_CATEGORIES':
      return Object.assign({}, state, {
        displayCategories: !state.displayCategories,
        menuOverlay: !state.menuOverlay,
      });
    case 'GET_SEARCHED_SERVICES_SUCCESS':
      return Object.assign({}, state, {
        filter: {
          ...state.filter,
          filteredServices: action.filter.filteredServices,
          loaded: true,
          filteredView: true,
        },
        menuOverlay: false,
        searchBox: false,
      });
    case 'TOGGLE_TAG_MENU':
      return Object.assign({}, state, {
        tagMenu: !state.tagMenu,
        menuOverlay: !state.menuOverlay,
      });
    case 'TOGGLE_MENUOVERLAY':
      return Object.assign({}, state, {
        menuOverlay: !state.MenuOverlay,
      });
    case 'SET_SEARCHBOX_VIEW':
      return Object.assign({}, state, {
        filter: {
          ...state.filter,
          filteredView: false,
          category: '',
          tags: '',
        },
        searchBox: true,
      });
    case 'TOGGLE_FILTERED_VIEW':
      return Object.assign({}, state, {
        filter: {
          ...state.filter,
          filteredView: !state.filteredView,
        },
      });
    default:
      return state;
  }
};

export default services;
