import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import FaqPageContainer from './FaqPageContainer';
import { fetchFaq } from './../../../actions/faqActions';

class Faq extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFaq());
  }
  render() {
    return (
      <FaqPageContainer />
    );
  }
}

Faq.propTypes = {
  dispatch: func,
};

Faq.defaultProps = {
  dispatch: null,
};

export default connect()(Faq);
