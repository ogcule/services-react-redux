import React from 'react';
import { bool, node } from 'prop-types';
import styles from './styles/serviceFormContainer.scss';
import ErrorMsg from './../shared/ErrorMsg';
import SuccessMessage from './../shared/SuccessMessage';

const ServiceFormBox = props => (
  <div className={styles['outer-container']}>
    <div className={styles['form-container-services']}>
      <div className={styles.message}>
        {props.hasErrored && <ErrorMsg msg="Error, please try again try changing service name" />}
        {props.hasSubmitted && <SuccessMessage />}
      </div>
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
