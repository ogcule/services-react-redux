import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/openFormBtn.scss';

const OpenFormBtn = props => (
  <div className={styles['add-btn']}>
    Add service
    <button onClick={props.openForm} />
  </div>
);

OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
};
OpenFormBtn.defaultProps = {
  openForm: null,
};
export default OpenFormBtn;
