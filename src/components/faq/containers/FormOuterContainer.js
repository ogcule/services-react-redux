import { connect } from 'react-redux';
import FormOuter from './../FormOuter';

const mapStateToProps = state => (
  {
    hasSubmittedFAQ: state.faq.hasSubmittedFAQ,
    hasErroredFAQ: state.faq.hasErroredFAQ,
  }
);

const FormOuterContainer = connect(
  mapStateToProps,
  null,
)(FormOuter);

export default FormOuterContainer;
