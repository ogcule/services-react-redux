import React from 'react';
import { bool, string, arrayOf, shape, number } from 'prop-types';
import styles from './faq.scss';
// stateless component that adds message when new FAQ added.
// component for displaying the frequently asked questions
const Questions = ({
  loadedFAQ,
  questions,
}) => {
  if (!loadedFAQ) {
    return <p>.....Loading</p>;
  }
  return (
    <ul className={styles.questions}>
      {questions.map((obj) => {
        const { id, question, answer } = obj;
        return (
          <ul key={id} data-id={id}>
            <li className={styles['li-heading']}>{question}<hr /></li>
            <li className={styles['li-answer']}>{answer}</li>
          </ul>
        );
      })}
    </ul>
  );
};
Questions.propTypes = {
  loadedFAQ: bool,
  questions: arrayOf(shape({
    id: number,
    question: string,
    answer: string,
  })),
};
Questions.defaultProps = {
  loadedFAQ: false,
  questions: [{ id: 0, question: 'What happens if there is an error getting your information?', answer: 'You get this message' }],
};
export default Questions;
