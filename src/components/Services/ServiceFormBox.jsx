import React from 'react';
import { bool, node } from 'prop-types';
import styles from './styles/serviceFormContainer.scss';
import CloseFormBtn from './../shared/containers/CloseFormBtn';
import ErrorMsg from './../shared/ErrorMsg';
import SuccessMessage from './../shared/SuccessMessage';

const ServiceFormBox = props => (
  <div className={styles['outer-container']}>
    <div className={styles['form-container-services']}>
      <CloseFormBtn />
      {props.hasErrored && <ErrorMsg msg="Oops, error when trying to submit service!" />}
      {props.hasSubmitted && <SuccessMessage />}
      {props.children}
    </div>
  </div>
);

ServiceFormBox.propTypes = {
  hasErrored: bool,
  hasSubmitted: bool,
  children: node,
};
ServiceFormBox.defaultProps = {
  hasErrored: false,
  hasSubmitted: false,
  children: null,
};
export default ServiceFormBox;
