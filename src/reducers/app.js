// reducers and state needed for all of the App

const initalState = {
  route: 'home',
  // current route so I can change action of
  // share components and change actions depending on route.
};

const app = (state = initalState, action) => {
  switch (action.type) {
    case 'CURRENT_ROUTE':
      return { route: action.text };
    default:
      return state;
  }
};

export default app;
