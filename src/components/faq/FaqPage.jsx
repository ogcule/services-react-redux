import React from 'react';
import { bool } from 'prop-types';
import styles from './faq.scss';
import QuestionsContainer from './containers/QuestionsContainer';
import FormOuterContainer from './containers/FormOuterContainer';
import Subtitle from './../shared/Subtitle';
import OpenFormBtnFAQContainer from './containers/OpenFormBtnFAQContainer';

const FaqPage = ({ formOpenFAQ }) => (
  <div className={styles['faq-box']}>
    <Subtitle subtitle="Frequently asked questions" />
    <div className={styles['faq-btn-container']}>
      <OpenFormBtnFAQContainer text="Add Question" />
    </div>
    {formOpenFAQ ? <FormOuterContainer /> : <QuestionsContainer />}
  </div>
);

FaqPage.propTypes = {
  formOpenFAQ: bool,
};
FaqPage.defaultProps = {
  formOpenFAQ: false,
};

export default FaqPage;
