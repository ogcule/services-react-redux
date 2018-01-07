import React from 'react';
import { string, node } from 'prop-types';
import styles from './styles/currentView.scss';
import images from './../../utils/images';

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
        {category && <img src={images.listIcon} alt="tag" />}
        {category && <span>{' : '}{category}</span>}
        {category && tags && <span>&gt;</span>}
        {tags && <img src={images.tagIcon} alt="tag" />}
        {tags && <span>{' : '}{tags}</span>}
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
