import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import styles from './../styles/shared.scss';

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

// if statement so can toggle different forms with statement
// component
const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.section === 'services') {
    return {
      closeForm: () => dispatch({
        type: 'TOGGLE_FORM',
      }),
    };
  }
  return {
    closeForm: () => dispatch({
      type: 'TOGGLE_FAQ_FORM',
    }),
  };
};

export default connect(null, mapDispatchToProps)(CloseFormBtn);
