import React from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import styles from './../styles/servicesPage.scss';
import Subtitle from './../../shared/Subtitle';
import OpenFormBtn from './../../shared/containers/openFormBtnContainer';
import FilteredView from './FilteredView';
import FilterByTags from './FilterByTags';
import CurrentView from './CurrentView';
import MenuOverlay from './MenuOverlay';
import Search from './../Search';
import ServiceFormBoxContainer from './ServiceFormBoxContainer';
import ServiceForm from './ServiceForm';
import Categories from './Categories';
import { getSearchedServices, createService } from './../../../actions/serviceActions';

const ServicesPage = ({
  dispatch,
  filteredView,
  searchBox,
  formOpen,
}) => {
  // values from redux-form is an object
  const submitSearch = values => dispatch(getSearchedServices(values.search));

  const submitNewService = (values) => {
    console.log(values);
    dispatch(createService(values));
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
          <OpenFormBtn text="" />
        </MenuOverlay>
        {(!filteredView && searchBox && !formOpen) &&
        <Search
          onSubmit={submitSearch}
        />}
        {console.log('service form', formOpen)}
        {formOpen &&
          <ServiceFormBoxContainer>
            <ServiceForm
              onSubmit={submitNewService}
            />
          </ServiceFormBoxContainer>}
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
  }
);

ServicesPage.propTypes = {
  dispatch: func,
  formOpen: bool,
  filteredView: bool,
  searchBox: bool,
};
ServicesPage.defaultProps = {
  dispatch: null,
  formOpen: false,
  filteredView: false,
  searchBox: true,
};

export default connect(mapStateToProps)(ServicesPage);
