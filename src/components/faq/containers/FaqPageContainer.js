import { connect } from 'react-redux';
import FaqPage from './../FaqPage';

const mapStateToProps = state => (
  {
    formOpenFAQ: state.faq.formOpenFAQ,
  }
);

const FaqPageContainer = connect(
  mapStateToProps,
  null,
)(FaqPage);

export default FaqPageContainer;
