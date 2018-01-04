import React from 'react';
import { func, string } from 'prop-types';
import styles from './styles/openFormBtn.scss';

const OpenFormBtn = ({ openForm, text }) => (
  <div className={styles['add-btn']}>
    <span>{text}</span>
    <button onClick={openForm} />
  </div>
);

OpenFormBtn.propTypes = {
  openForm: func,
  text: string,
};
OpenFormBtn.defaultProps = {
  openForm: null,
  text: '',
};

export default OpenFormBtn;
