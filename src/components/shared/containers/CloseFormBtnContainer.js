import { connect } from 'react-redux';
import CloseFormBtn from './../CloseFormBtn';

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

const CloseFormBtnContainer = connect(
  null,
  mapDispatchToProps,
)(CloseFormBtn);

export default CloseFormBtnContainer;
