import React from 'react';
import { bool, number, string, func, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import Questions from './Questions';
import styles from './faq.scss';
import FormContainer from './containers/FormContainer';
import Subtitle from './../shared/Subtitle';
import OpenFormBtn from './../shared/OpenFormBtn';

const FaqPage = ({ formOpen, ...props }) => (
  <div className={styles.faqBox}>
    <Subtitle subtitle="Frequently asked questions" />
    <div className={styles.faqBtnContainer}>
      <OpenFormBtn text="Add Question" openForm={props.handleFormChange} />
    </div>
    {formOpen ? <FormContainer
      addMessage={props.addMessage}
      updateQuestions={props.updateQuestions}
      closeForm={props.handleFormChange}
    /> : <Questions
      messageShown={props.messageShown}
      questions={props.questions}
      loaded={props.loaded}
    />}
  </div>
);

const mapStateToProps = state => (
  {
    formOpen: state.faq.formOpenFAQ,
  }
);

FaqPage.propTypes = {
  // props from redux state
  formOpen: bool,
  // react state props
  messageShown: bool,
  loaded: bool,
  questions: arrayOf(shape({
    id: number,
    question: string,
    answer: string,
  })),
  handleFormChange: func,
  addMessage: func,
  updateQuestions: func,
};
FaqPage.defaultProps = {
  formOpen: false,
  messageShown: false,
  loaded: false,
  questions: {},
  handleFormChange: null,
  addMessage: null,
  updateQuestions: null,
};
OpenFormBtn.propTypes = {
  openForm: func,
};
OpenFormBtn.defaultProps = {
  openForm: null,
};

export default connect(mapStateToProps)(FaqPage);
