import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styles from './styles/search.scss';

// using redux-form for client side validation
const required = value => (value ? undefined : 'Field can not be blank');

const alphaNumeric = value =>
  value && (/[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined);

const renderField = ({
  input,
  type,
  meta: { touched, error, warning },
}) => (
  <div className={styles['input-and-error']}>
    <input
      {...input}
      placeholder="Search..."
      type={type}
    />
    {touched &&
      (
        <h4 className={styles.error}>
          {((error && <span>{error}</span>) ||
           (warning && <span>{warning}</span>))
          }
        </h4>
      )
    }
  </div>
);

const Search = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props;
  return (
    <div className={styles['search-container']}>
      <form
        method="get"
        onSubmit={handleSubmit}
        className={styles['search-box']}
      >
        <Field
          name="search"
          type="text"
          component={renderField}
          validate={required}
          warn={alphaNumeric}
        />
        <button
          type="submit"
          disabled={pristine || submitting}
        />
      </form>
    </div>
  );
};

renderField.propTypes = {
  input: shape({}),
  label: string,
  type: string,
  meta: shape({}),
};
renderField.defaultProps = {
  input: {},
  label: '',
  type: '',
  meta: {},
};
Search.propTypes = {
  pristine: bool,
  submitting: bool,
  handleSubmit: func,
};
Search.defaultProps = {
  pristine: true,
  submitting: true,
  handleSubmit: null,
};

export default reduxForm({
  form: 'search',
})(Search);
