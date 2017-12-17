import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import styles from './../styles/servicesPage.scss';
import Subtitle from './../../shared/Subtitle';
import OpenFormBtn from './../../shared/containers/openFormBtnContainer';
import FilteredView from './../FilteredView';
import FilterByTags from './../FilterByTags';
import CurrentView from './../CurrentView';
import MenuOverlay from './../MenuOverlay';
import Search from './../Search';
import ServiceFormBox from './../ServiceFormBox';
import ServiceForm from './../ServiceForm';
import Categories from './../Categories';

const ServicesPage = ({
  formOpen,
  filteredView,
  searchBox,
}) => {
  const submit = values =>
  // print the form values to the console
    console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
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
        <Search />}
        {console.log('service form', formOpen)}
        {formOpen &&
          <ServiceFormBox>
            <ServiceForm
              onSubmit={submit}
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
  }
);

ServicesPage.propTypes = {
  formOpen: bool,
  filteredView: bool,
  searchBox: bool,
};
ServicesPage.defaultProps = {
  formOpen: false,
  filteredView: false,
  searchBox: true,
};

export default connect(mapStateToProps)(ServicesPage);
