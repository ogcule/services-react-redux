// reducers and state needed for all of the App

const initalState = {
  route: 'home',
  addBtnText: '',
  // current route so I can change action of
  // share components and change actions depending on route.
};

const app = (state = initalState, action) => {
  switch (action.type) {
    case 'CURRENT_ROUTE':
      return Object.assign({}, state, {
        route: action.route,
      });
    case 'CHANGE_OPEN_BTN_TEXT':
      return Object.assign({}, state, {
        addBtnText: action.addBtnText,
      });
    default:
      return state;
  }
};

export default app;
