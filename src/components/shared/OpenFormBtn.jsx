import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/openFormBtn.scss';

const OpenFormBtn = ({ openForm }) => (
  <div className={styles['add-btn']}>
    Add service
    <button onClick={openForm} />
  </div>
);

OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
};
OpenFormBtn.defaultProps = {
  openForm: null,
};

export default OpenFormBtn;
