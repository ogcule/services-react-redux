import React from 'react';
import { bool } from 'prop-types';
import styles from './faq.scss';
import QuestionsContainer from './containers/QuestionsContainer';
import FormOuterContainer from './containers/FormOuterContainer';
import Subtitle from './../shared/Subtitle';
import OpenFormBtnFAQContainer from './containers/OpenFormBtnFAQContainer';

const FaqPage = ({ formOpenFAQ }) => (
  <div className={styles['simple-container']}>
    {!formOpenFAQ &&
      <div className={styles['fixed-header']}>
        <Subtitle subtitle="Frequently asked questions" />
        <OpenFormBtnFAQContainer text="Add Question" />
      </div>
    }
    <div className={styles['faq-box']}>
      {formOpenFAQ ? <FormOuterContainer /> : <QuestionsContainer />}
    </div>
  </div>
);

FaqPage.propTypes = {
  formOpenFAQ: bool,
};
FaqPage.defaultProps = {
  formOpenFAQ: false,
};

export default FaqPage;
