import React from 'react';
import { func } from 'prop-types';
import styles from './styles/shared.scss';

const CloseFormBtn = ({ closeForm }) => (
  <div className={styles['close-btn']}>
    <button onClick={closeForm}>&times;</button>
  </div>
);
CloseFormBtn.propTypes = {
  closeForm: func,
};
CloseFormBtn.defaultProps = {
  closeForm: null,
};

export default CloseFormBtn;
