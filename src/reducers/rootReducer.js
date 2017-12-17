import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import formView from './formView';
import faq from './faq';
import app from './app';
import services from './services';

export default combineReducers({
  services,
  app,
  faq,
  formView,
  form: formReducer,
});
