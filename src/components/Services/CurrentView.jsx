import React from 'react';
import { string, node } from 'prop-types';
import styles from './styles/currentView.scss';

const CurrentView = ({
  category,
  tags,
  children,
}) => {
  const container = (category || tags) ?
    'breadcrumbs-trail-container' :
    'breadcrumbs-container';

  return (
    <div className={styles['outer-container']}>
      <div className={styles[container]}>
        {((!category) && (!tags)) && children}
        {category && <span>Categories</span>}
        {category && <span>{`> ${category}`}</span>}
        {tags && <span>{'> Tags: '}{tags}</span>}
      </div>
    </div>
  );
};

CurrentView.propTypes = {
  children: node,
  category: string,
  tags: string,
};
CurrentView.defaultProps = {
  children: null,
  category: '',
  tags: '',
};
export default CurrentView;
