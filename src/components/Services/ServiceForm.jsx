import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func, string, objectOf, bool } from 'prop-types';
import styles from './styles/serviceForm.scss';
import { tags, categories, rcgpCurriculum } from './../../data/categories';
import ErrorMsg from './../shared/ErrorMsg';


const ServiceForm = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props;
  return (
    <form method="post" onSubmit={handleSubmit} >
      <legend>Add a service</legend>
      <p>* Required</p>
      <label htmlFor="category">
        * Category:
        <Field
          name="category"
          component="select"
          data-forms="values"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>))}
        </Field>
      </label>
      <p>Hold the Ctrl key while clicking to select multiple tags (⌘-click on Mac).</p>
      <label htmlFor="tags">
        * Tags:
        <Field
          name="tags"
          component="select"
          data-forms="value"
          multiple
          type="select-multiple"
          size="3"
        >
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>))}
        </Field>
      </label>
      {props.errorMsg.tags && <ErrorMsg msg={props.errorMsg.tags} />}
      <label htmlFor="rcgp">
        * Category (RCGP):
        <Field
          name="rcgpCategory"
          data-forms="values"
          component="select"
        >
          {rcgpCurriculum.map(heading => (
            <option key={Object.keys(heading)[0]} value={heading[Object.keys(heading)[0]]}>
              {heading[Object.keys(heading)[0]]}
            </option>))}
        </Field>
      </label>
      <label htmlFor="name">
        * Name of Service:
        <Field
          name="name"
          component="input"
          type="text"
          data-forms="values"
        />
      </label>
      {props.errorMsg.name && <ErrorMsg msg={props.errorMsg.name} />}
      <label htmlFor="description">
        * Description of Service:
        <Field
          name="description"
          component="textarea"
          type="text"
          data-forms="values"
        />
      </label>
      {props.errorMsg.description && <ErrorMsg msg={props.errorMsg.description} />}
      <label htmlFor="referral">
        Referral:
        <Field
          name="referral"
          component="textarea"
          type="text"
          data-forms="values"
          placeholder="Referral pathway"
        />
      </label>
      <label htmlFor="address">
        Address:
        <Field
          name="address"
          component="textarea"
          type="text"
          data-forms="values"
        />
      </label>
      <label htmlFor="postcode">
        * Postcode:
        <Field
          name="postcode"
          component="input"
          type="text"
          data-forms="values"
        />
      </label>
      {props.errorMsg.postcode && <ErrorMsg msg={props.errorMsg.postcode} />}
      <label htmlFor="telephone">
        * Telephone:
        <Field
          name="telephone"
          component="input"
          type="tel"
          data-forms="values"
        />
      </label>
      {props.errorMsg.telephone && <ErrorMsg msg={props.errorMsg.telephone} />}
      <label htmlFor="email">
        E-mail:
        <Field
          type="email"
          component="input"
          name="email"
          data-forms="values"
          placeholder="service@domain.com"
        />
      </label>
      {props.errorMsg.email && <ErrorMsg msg={props.errorMsg.email} />}
      <label htmlFor="weblink">
        Web address:
        <Field
          type="url"
          component="input"
          name="weblink"
          data-forms="values"
          placeholder="https://www.servicewebsite.com"
        />
      </label>
      {props.errorMsg.weblink && <ErrorMsg msg={props.errorMsg.weblink} />}
      <div className={styles.formBtn}>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

ServiceForm.propTypes = {
  pristine: bool,
  submitting: bool,
  handleSubmit: func,
  errorMsg: objectOf(string),
};
ServiceForm.defaultProps = {
  pristine: true,
  submitting: true,
  handleSubmit: null,
  errorMsg: {},
};

export default reduxForm({
  form: 'service',
})(ServiceForm);
