import { connect } from 'react-redux';
import Questions from './../Questions';

const mapStateToProps = state => (
  {
    loaded: state.faq.loadedFAQ,
    questions: state.faq.questions,
  }
);


const mapDispatchToProps = dispatch => (
  {
    openForm: () => dispatch({
      type: 'TOGGLE_FORM',
    }),
  }
);

const QuestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);

export default QuestionsContainer;
