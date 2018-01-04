// reducers for frequently asked questions (faq)

const initalState = {
  formOpenFAQ: false,
  questions: {},
  loadedFAQ: false,
  hasSubmittedFAQ: false,
  hasErroredFAQ: false,
};

const faq = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAQ_FORM':
      return Object.assign({}, state, {
        formOpenFAQ: !state.formOpenFAQ,
      });
    case 'FETCH_FAQ_SUCCESS':
      return Object.assign({}, state, {
        questions: action.questions,
        loadedFAQ: action.loadedFAQ,
      });
    case 'TOGGLE_FAQ_MESSAGE':
      return Object.assign({}, state, {
        messageShown: !state.messageShown,
      });
    case 'CREATE_FAQ_SUCCESS':
      return Object.assign({}, state, {
        hasSubmittedFAQ: action.hasSubmittedFAQ,
      });
    case 'CREATE_FAQ_ERROR':
      return Object.assign({}, state, {
        hasErroredFAQ: action.hasErroredFAQ,
      });
    default:
      return state;
  }
};

export default faq;
