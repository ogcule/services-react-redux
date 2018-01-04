import React from 'react';
import { connect } from 'react-redux';
import { string, node } from 'prop-types';
import styles from './../styles/currentView.scss';
// import { getFilteredCategory } from './../../../actions/serviceActions';

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

const mapStateToProps = state => (
  {
    category: state.services.filter.category,
    tags: state.services.filter.tags,
  }
);

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
export default connect(mapStateToProps)(CurrentView);
