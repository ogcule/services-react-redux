import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import formView from './formView';

export default combineReducers({
  formView,
  form: formReducer,
});
