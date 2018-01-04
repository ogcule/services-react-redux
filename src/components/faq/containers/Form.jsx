import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  func,
  shape,
  bool,
  string,
} from 'prop-types';
import { createFaq } from './../../../actions/faqActions';
import styles from './../faq.scss';

const renderField = ({
  input, label, htmlFor, type, meta: { touched, error },
}) => (
  <div className={styles['form-row']}>
    <label htmlFor={htmlFor}>
      {label}
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </label>
  </div>
);


const Form = (props) => {
  const {
    error, handleSubmit, pristine, submitting, dispatch,
  } = props;

  const submit = (values) => {
    console.log('submit', values);
    // need to return this dispatch otherwise you get any uncaught
    // promise from redux form Submission Errors.
    return dispatch(createFaq(values));
  };
  return (
    <form
      method="post"
      onSubmit={handleSubmit(submit)}
    >
      <legend>Add a new frequently asked question</legend>
      <Field
        name="question"
        type="text"
        component={renderField}
        label="New Question"
        htmlFor="question"
      />
      <Field
        name="answer"
        type="textarea"
        component={renderField}
        label="Answer"
        htmlFor="question"
      />
      {error && <strong>{error}</strong>}
      <div className={styles['form-btn']}>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
// propTypes and defaultProps
renderField.propTypes = {
  input: shape({}),
  label: string,
  type: string,
  meta: shape({}),
  htmlFor: string,
  placeholder: string,
};

renderField.defaultProps = {
  input: {},
  label: '',
  type: '',
  meta: {},
  htmlFor: '',
  placeholder: '',
};

Form.propTypes = {
  error: string,
  pristine: bool,
  submitting: bool,
  handleSubmit: func,
  dispatch: func,
};
Form.defaultProps = {
  error: '',
  pristine: true,
  submitting: true,
  handleSubmit: null,
  dispatch: null,
};

export default reduxForm({
  form: 'FAQ', // a unique identifier for this form
})(Form);
