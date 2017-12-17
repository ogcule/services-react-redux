import { connect } from 'react-redux';
import OpenFormBtn from './../OpenFormBtn';

const mapDispatchToProps = dispatch => (
  {
    openForm: () => dispatch({
      type: 'TOGGLE_FORM',
    }),
  }
);

const openFormBtnContainer = connect(
  null,
  mapDispatchToProps,
)(OpenFormBtn);

export default openFormBtnContainer;
