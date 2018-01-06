import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  func,
  shape,
  bool,
  string,
  arrayOf,
} from 'prop-types';
import CloseFormBtnContainer from './../../shared/containers/CloseFormBtnContainer';
import styles from './../styles/serviceForm.scss';
import { tags, categories, rcgpCategories } from './../../../data/categories';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
  htmlFor,
  placeholder,
}) => (
  <div className={styles['service-input']}>
    <label htmlFor={htmlFor}>{label}
      <input {...input} placeholder={placeholder} type={type} />
    </label>
    {touched && error && <span>{error}</span>}
  </div>
);
const renderFieldSelect = ({
  input,
  label,
  type,
  meta: { touched, error },
  htmlFor,
  options,
}) => (
  <div className={styles['service-input']}>
    {type === 'select-multiple' ?
      <label htmlFor={htmlFor}>{label}
        <select
          {...input}
          multiple
          size="3"
          placeholder={label}
          type={type}
        >
          {options.map(key => (
            <option key={key} value={key}>
              {key}
            </option>))}
        </select>
      </label> :
      <label htmlFor={htmlFor}>{label}
        <select
          {...input}
          placeholder={label}
          type={type}
        >
          {options.map(key => (
            <option key={key} value={key}>
              {key}
            </option>))}
        </select>
      </label>
    }
    {touched && error && <span>{error}</span>}
  </div>
);


const ServiceForm = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props;

  return (
    <div className={styles['service-form']} >
      <CloseFormBtnContainer section="services" />
      <form
        method="post"
        onSubmit={handleSubmit}
        className={styles['service-form']}
      >
        <legend>Add a service</legend>
        <p>* Required</p>
        <Field
          name="category"
          component={renderFieldSelect}
          htmlFor="category"
          label="* Category:"
          options={categories}
        />
        <p>Hold the Ctrl key while clicking to select multiple tags (⌘-click on Mac).</p>
        <Field
          name="tags"
          component={renderFieldSelect}
          type="select-multiple"
          htmlFor="tags"
          label="* Tags:"
          options={tags}
        />
        <Field
          name="rcgpCategory"
          component={renderFieldSelect}
          htmlFor="rcgp"
          label="* Category (RCGP):"
          options={rcgpCategories}
        />
        <Field
          name="name"
          component={renderField}
          type="text"
          label="* Name: "
          htmlFor="name"
        />
        <Field
          name="description"
          component={renderField}
          type="textarea"
          htmlFor="description"
          label="* Description:"
        />
        <Field
          name="referral"
          component={renderField}
          type="text"
          placeholder="Referral pathway"
          htmlFor="referral"
          label="Referral:"
        />
        <Field
          name="address"
          component={renderField}
          type="text"
          htmlFor="address"
          label="Address:"
        />
        <Field
          name="postcode"
          component={renderField}
          type="text"
          htmlFor="postcode"
          label="* Postcode:"
        />
        <Field
          name="telephone"
          component={renderField}
          type="tel"
          htmlFor="telephone"
          label="* Telephone:"
        />
        <Field
          type="email"
          component={renderField}
          name="email"
          placeholder="service@domain.com"
          htmlFor="email"
          label="E-mail:"
        />
        <Field
          type="url"
          component={renderField}
          name="weblink"
          placeholder="https://www.servicewebsite.com"
          htmlFor="weblink"
          label="Web address:"
        />
        <div className={styles.formBtn}>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

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
renderFieldSelect.propTypes = {
  input: shape({}),
  label: string,
  type: string,
  meta: shape({}),
  htmlFor: string,
  placeholder: string,
  options: arrayOf(string),
};
renderFieldSelect.defaultProps = {
  input: {},
  label: '',
  type: '',
  meta: {},
  htmlFor: '',
  placeholder: '',
  options: [],
};
ServiceForm.propTypes = {
  pristine: bool,
  submitting: bool,
  handleSubmit: func,
};
ServiceForm.defaultProps = {
  pristine: true,
  submitting: true,
  handleSubmit: null,
};

export default reduxForm({
  form: 'service',
})(ServiceForm);
