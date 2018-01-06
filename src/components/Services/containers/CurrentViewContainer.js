import { connect } from 'react-redux';
import CurrentView from './../CurrentView';

// if statement so can toggle different forms with statement
// component

const mapStateToProps = state => (
  {
    category: state.services.filter.category,
    tags: state.services.filter.tags,
  }
);

const CurrentViewContainer = connect(
  mapStateToProps,
  null,
)(CurrentView);

export default CurrentViewContainer;
