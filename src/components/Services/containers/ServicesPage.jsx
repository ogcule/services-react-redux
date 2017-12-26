import React from 'react';
import { connect } from 'react-redux';
import { bool, func, shape } from 'prop-types';
import styles from './../styles/servicesPage.scss';
import Subtitle from './../../shared/Subtitle';
import OpenFormBtn from './../../shared/containers/openFormBtnContainer';
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
  errorMsg,
  hasInvalidMsgs,
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
        {formOpen &&
          <ServiceFormBox>
            <ServiceForm
              onSubmit={submitNewService}
              errorMsg={errorMsg}
              hasInvalidMsgs={hasInvalidMsgs}
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
    errorMsg: state.formView.invalidMsgs,
    hasInvalidMsgs: state.formView.hasInvalidMsgs,
  }
);

ServicesPage.propTypes = {
  dispatch: func,
  formOpen: bool,
  filteredView: bool,
  searchBox: bool,
  errorMsg: shape({}),
  hasInvalidMsgs: bool,
};
ServicesPage.defaultProps = {
  dispatch: null,
  formOpen: false,
  filteredView: false,
  searchBox: true,
  errorMsg: {},
  hasInvalidMsgs: false,
};

export default connect(mapStateToProps)(ServicesPage);
