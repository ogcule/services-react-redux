import React from 'react';
import { connect } from 'react-redux';
// import { func } from 'prop-types';
import FaqPage from './../FaqPage';
import apiFaq from './../../../api/apiFaq';
// import currentRoute from './../../../actions/index';

// component for the frequently asked questions section
class FaqContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      // message to say new question added
      messageShown: false,
      expanded: false,
      loaded: false,
    };
    this.addMessageHandler = this.addMessageHandler.bind(this);
    this.updateQuestionsHandler = this.updateQuestionsHandler.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  componentDidMount() {
    this.getQuestions();
  }
  // function that calls ger request to the api
  getQuestions() {
    apiFaq.requestGet()
      .then((data) => {
        if (data) {
          this.setState({
            questions: data,
            loaded: true,
          });
        } else {
          this.setState({
            loaded: false,
          });
        }
      });
  }
  // handler to make get request to the api
  updateQuestionsHandler() {
    this.getQuestions();
  }
  addMessageHandler() {
    this.setState(prevState => ({ messageShown: !prevState.messageShown }));
  }
  // handler to change state for expanding the questions form
  handleFormChange() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    return (
      <FaqPage
        messageShown={this.state.messageShown}
        questions={this.state.questions}
        loaded={this.state.loaded}
        handleFormChange={this.handleFormChange}
        addMessage={this.addMessageHandler}
        updateQuestions={this.updateQuestionsHandler}
        expanded={this.state.expanded}
      />
    );
  }
}

// FaqContainer.propTypes = {
//   dispatch: func,
// };
//
// FaqContainer.defaultProps = {
//   dispatch: null,
// };

export default connect()(FaqContainer);
