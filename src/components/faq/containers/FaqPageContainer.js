import { connect } from 'react-redux';
import { createFaq } from './../../../actions/faqActions';
import FaqPage from './../FaqPage';

const mapStateToProps = state => (
  {
    formOpen: state.faq.formOpenFAQ,
  }
);

const mapDispatchToProps = dispatch => (
  {
    openForm: () => dispatch({
      type: 'TOGGLE_FAQ_FORM',
    }),
    submit: (values) => {
      console.log('submit', values);
      // need to return this dispatch otherwise you get any uncaught
      // promise from redux form Submission Errors.
      return dispatch(createFaq(values));
    },
  }
);

const FaqPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FaqPage);

export default FaqPageContainer;
