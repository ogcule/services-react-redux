import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import styles from './shared.scss';

const CloseFormBtn = ({ closeForm }) => (
  <div className={styles.closebtn}>
    <button onClick={closeForm}>&times;</button>
  </div>
);
CloseFormBtn.propTypes = {
  closeForm: func,
};
CloseFormBtn.defaultProps = {
  closeForm: null,
};

const mapDispatchToProps = dispatch => (
  {
    closeForm: () => dispatch({
      type: 'TOGGLE_FORM',
    }),
  }
);

export default connect(null, mapDispatchToProps)(CloseFormBtn);
