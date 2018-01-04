import React from 'react';
import { bool, func } from 'prop-types';
import styles from './faq.scss';
import QuestionsContainer from './containers/QuestionsContainer';
import Form from './containers/Form';
import Subtitle from './../shared/Subtitle';
import OpenFormBtnFAQContainer from './containers/OpenFormBtnFAQContainer';

const FaqPage = ({ formOpen, submit }) => (
  <div className={styles['faq-box']}>
    <Subtitle subtitle="Frequently asked questions" />
    <div className={styles['faq-btn-container']}>
      <OpenFormBtnFAQContainer text="Add Question" />
    </div>
    {formOpen ? <Form onSubmit={submit} /> : <QuestionsContainer />}
  </div>
);

FaqPage.propTypes = {
  formOpen: bool,
  submit: func,
};
FaqPage.defaultProps = {
  formOpen: false,
  submit: null,
};

export default FaqPage;
