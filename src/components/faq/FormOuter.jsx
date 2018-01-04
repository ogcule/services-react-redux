import React from 'react';
import { bool } from 'prop-types';
import styles from './faq.scss';
import CloseFormBtn from './../shared/containers/CloseFormBtn';
import ErrorMsg from './../shared/ErrorMsg';
import SuccessMessage from './../shared/SuccessMessage';
import Form from './containers/Form';

const FormOuter = ({ hasSubmittedFAQ, hasErroredFAQ }) => (
  <div className={styles['outer-container']}>
    <div className={styles['form-container-faq']}>
      <CloseFormBtn section="faq" />
      {hasSubmittedFAQ && <SuccessMessage /> }
      {hasErroredFAQ && <ErrorMsg msg="Error, please try again" />}
      <Form />
    </div>
  </div>
);

FormOuter.propTypes = {
  hasSubmittedFAQ: bool,
  hasErroredFAQ: bool,
};
FormOuter.defaultProps = {
  hasSubmittedFAQ: false,
  hasErroredFAQ: false,
};

// CloseFormBtn.propTypes = {
//   section: string,
// };
// CloseFormBtn.defaultProps = {
//   section: '',
// };
export default FormOuter;
