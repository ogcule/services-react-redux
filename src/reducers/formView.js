const initalState = {
  formOpen: false,
};

const formView = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return Object.assign({}, state, {
        formOpen: !state.formOpen,
      });
    default:
      return state;
  }
};

export default formView;
