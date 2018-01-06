import React from 'react';
import { bool, func } from 'prop-types';
import styles from './styles/servicesPage.scss';
import Subtitle from './../shared/Subtitle';
import OpenFormBtnServicesContainer from './containers/OpenFormBtnServicesContainer';
import FilteredView from './containers/FilteredView';
import FilterByTags from './containers/FilterByTags';
import CurrentViewContainer from './containers/CurrentViewContainer';
import MenuOverlay from './containers/MenuOverlay';
import Search from './Search';
import ServiceFormBox from './ServiceFormBox';
import ServiceForm from './containers/ServiceForm';
import Categories from './containers/Categories';

const ServicesPage = ({
  filteredView,
  searchBox,
  formOpen,
  hasErrored,
  hasSubmitted,
  submitSearch,
  submitNewService,
}) => (
  <div className={styles['simple-container']}>
    {!formOpen && <CurrentViewContainer><Subtitle subtitle="Services" /></CurrentViewContainer>}
    {!formOpen &&
      <MenuOverlay >
        <Categories />
        <FilterByTags />
        <OpenFormBtnServicesContainer text="Add service" />
      </MenuOverlay> }
    <div className={styles['services-box']}>
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

ServicesPage.propTypes = {
  submitSearch: func,
  submitNewService: func,
  formOpen: bool,
  filteredView: bool,
  searchBox: bool,
  hasSubmitted: bool,
  hasErrored: bool,
};
ServicesPage.defaultProps = {
  submitSearch: null,
  submitNewService: null,
  formOpen: false,
  filteredView: false,
  searchBox: true,
  hasSubmitted: false,
  hasErrored: false,
};

export default ServicesPage;
