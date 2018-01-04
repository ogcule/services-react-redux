import React from 'react';
import { connect } from 'react-redux';
import { func, bool, arrayOf, shape, string, number } from 'prop-types';
import { fetchFaq } from './../../../actions/faqActions';
import Questions from './../Questions';

class QuestionsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <Questions
        loadedFAQ={this.props.loadedFAQ}
        questions={this.props.questions}
        openForm={this.props.openForm}
      />
    );
  }
}

QuestionsContainer.propTypes = {
  fetchData: func,
  loadedFAQ: bool,
  questions: arrayOf(shape({
    id: number,
    question: string,
    answer: string,
  })),
  openForm: func,
};

QuestionsContainer.defaultProps = {
  fetchData: null,
  loadedFAQ: false,
  openForm: null,
  questions: [{ id: 0, question: 'What happens if there is an error getting your information?', answer: 'You get this message' }],
};

const mapStateToProps = state => (
  {
    loadedFAQ: state.faq.loadedFAQ,
    questions: state.faq.questions,
  }
);


const mapDispatchToProps = dispatch => (
  {
    openForm: () => dispatch({
      type: 'TOGGLE_FORM',
    }),
    fetchData: () => dispatch(fetchFaq()),
  }
);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionsContainer);
