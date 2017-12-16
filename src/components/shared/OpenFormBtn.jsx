import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles/openFormBtn.scss';

const OpenFormBtn = ({ openForm }) => (
  <div className={styles['add-btn']}>
    Add service
    <button onClick={openForm} />
  </div>
);

const mapDispatchToProps = dispatch => (
  {
    openForm: () => dispatch({
      type: 'TOGGLE_FORM',
    }),
  }
);

OpenFormBtn.propTypes = {
  openForm: PropTypes.func,
};
OpenFormBtn.defaultProps = {
  openForm: null,
};

export default connect(
  null,
  mapDispatchToProps,
)(OpenFormBtn);
