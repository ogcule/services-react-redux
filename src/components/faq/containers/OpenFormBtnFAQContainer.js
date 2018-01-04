import { connect } from 'react-redux';
import OpenFormBtn from './../../shared/OpenFormBtn';

const mapStateToProps = (state, ownProps) => (
  {
    text: ownProps.text,
  }
);

const mapDispatchToProps = dispatch => (
  {
    openForm: () => dispatch({
      type: 'TOGGLE_FAQ_FORM',
    }),

  }
);

const OpenFormBtnFAQContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OpenFormBtn);

export default OpenFormBtnFAQContainer;
