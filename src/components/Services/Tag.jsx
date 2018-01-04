import React from 'react';
import { string } from 'prop-types';
import styles from './styles/services.scss';

const Tag = props => (
  <li className={styles['tag-container']}>
    <svg id="bg" width="100" height="100%" viewBox="0 0 150 100" preserveAspectRatio="none">
      <path d="M0,0 h110 l40,50 l-40,50 h-110z" fill="#999" />
    </svg>
    <div className={styles['tag-content']}>{props.tag}</div>
  </li>
);

Tag.propTypes = {
  tag: string,
};
Tag.defaultProps = {
  tag: '',
};

export default Tag;
