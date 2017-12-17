// reducers for frequently asked questions (faq)

const initalState = {
  formOpenFAQ: false,
};

const faq = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAQ_FORM':
      return Object.assign({}, state, {
        formOpenFAQ: !state.formOpenFAQ,
      });
    default:
      return state;
  }
};

export default faq;
