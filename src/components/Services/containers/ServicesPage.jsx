import React from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import styles from './../styles/servicesPage.scss';
import Subtitle from './../../shared/Subtitle';
import OpenFormBtnServicesContainer from './OpenFormBtnServicesContainer';
import FilteredView from './FilteredView';
import FilterByTags from './FilterByTags';
import CurrentView from './CurrentView';
import MenuOverlay from './MenuOverlay';
import Search from './../Search';
import ServiceFormBox from './../ServiceFormBox';
import ServiceForm from './ServiceForm';
import Categories from './Categories';
import { getSearchedServices, createService } from './../../../actions/serviceActions';

const ServicesPage = ({
  dispatch,
  filteredView,
  searchBox,
  formOpen,
  hasErrored,
  hasSubmitted,
}) => {
  // values from redux-form is an object
  const submitSearch = values => dispatch(getSearchedServices(values.search));

  const submitNewService = (values) => {
    console.log('submit', values);
    // need to return this dispatch otherwise you get any uncaught
    // promise from redux form Sumbission Errors.
    return dispatch(createService(values));
  };

  return (
    <div className={styles['simple-container']}>
      <CurrentView>
        <Subtitle subtitle="Services" />
      </CurrentView>
      <div className={styles['services-box']}>
        <MenuOverlay >
          <Categories />
          <FilterByTags />
          <OpenFormBtnServicesContainer text="Add service" />
        </MenuOverlay>
        {(!filteredView && searchBox && !formOpen) &&
        <Search
          onSubmit={submitSearch}
        />}
        {formOpen &&
          <ServiceFormBox
            hasErrored={hasErrored}
            hasSubmitted={hasSubmitted}
          >
            <ServiceForm
              onSubmit={submitNewService}
            />
          </ServiceFormBox>}
        {(filteredView && !searchBox && !formOpen) &&
          <FilteredView />
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
    formOpen: state.formView.formOpen,
    filteredView: state.services.filter.filteredView,
    searchBox: state.services.searchBox,
    hasErrored: state.formView.hasErrored,
    hasSubmitted: state.formView.hasSubmitted,
  }
);

ServicesPage.propTypes = {
  dispatch: func,
  formOpen: bool,
  filteredView: bool,
  searchBox: bool,
  hasSubmitted: bool,
  hasErrored: bool,
};
ServicesPage.defaultProps = {
  dispatch: null,
  formOpen: false,
  filteredView: false,
  searchBox: true,
  hasSubmitted: false,
  hasErrored: false,
};

export default connect(mapStateToProps)(ServicesPage);
