import React from 'react';
import { bool, node, shape } from 'prop-types';
import styles from './styles/serviceFormContainer.scss';
import CloseFormBtn from './../shared/containers/CloseFormBtn';
import ErrorMsg from './../shared/ErrorMsg';
import SuccessMessage from './../shared/SuccessMessage';

const ServiceFormBox = props => (
  <div className={styles['outer-container']}>
    {console.log('serviceFromBox:', props.errorMsg)}
    <div className={styles['form-container-services']}>
      <CloseFormBtn />
      {props.hasErrored && <ErrorMsg msg="Oops, error when trying to submit service!" />}
      {props.hasSubmitted && <SuccessMessage />}
      {props.children}
    </div>
  </div>
);

ServiceFormBox.propTypes = {
  errorMsg: shape({}),
  hasErrored: bool,
  hasSubmitted: bool,
  children: node,
};
ServiceFormBox.defaultProps = {
  errorMsg: {},
  hasErrored: false,
  hasSubmitted: false,
  children: null,
};
export default ServiceFormBox;
