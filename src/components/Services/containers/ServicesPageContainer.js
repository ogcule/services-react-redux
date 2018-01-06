import { connect } from 'react-redux';
import ServicesPage from './../ServicesPage';
import { getSearchedServices, createService } from './../../../actions/serviceActions';

const mapStateToProps = state => (
  {
    formOpen: state.formView.formOpen,
    filteredView: state.services.filter.filteredView,
    searchBox: state.services.searchBox,
    hasErrored: state.formView.hasErrored,
    hasSubmitted: state.formView.hasSubmitted,
  }
);

const mapDispatchToProps = dispatch => (
  {
    submitSearch: values => dispatch(getSearchedServices(values.search)),
    submitNewService: (values) => {
      console.log('submit', values);
      // need to return this dispatch otherwise you get any uncaught
      // promise from redux form Sumbission Errors.
      return dispatch(createService(values));
    },
  }
);


const ServicesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServicesPage);

export default ServicesPageContainer;
