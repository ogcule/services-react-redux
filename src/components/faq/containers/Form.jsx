import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  func,
  shape,
  bool,
  string,
} from 'prop-types';
import styles from './../faq.scss';
import CloseFormBtn from './../../shared/containers/CloseFormBtn';

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
    error, handleSubmit, pristine, submitting,
  } = props;
  return (
    <div className={styles['outer-container']}>
      <div className={styles['form-container-faq']}>
        <CloseFormBtn section="faq" />
        <form
          method="post"
          onSubmit={handleSubmit}
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
      </div>
    </div>
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
};
Form.defaultProps = {
  error: '',
  pristine: true,
  submitting: true,
  handleSubmit: null,
};

CloseFormBtn.propTypes = {
  component: func,
};
CloseFormBtn.defaultProps = {
  component: null,
};
export default reduxForm({
  form: 'FAQ', // a unique identifier for this form
})(Form);
