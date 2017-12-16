import React from 'react';
import { connect } from 'react-redux';
import { func, bool, node } from 'prop-types';
import styles from './styles/servicesPage.scss';
import Subtitle from './../shared/Subtitle';
import OpenFormBtn from './../shared/OpenFormBtn';
import FilteredView from './FilteredView';
import FilterByTags from './FilterByTags';
import CurrentView from './CurrentView';
import MenuOverlay from './MenuOverlay';
import Search from './Search';
// import OptionBtn from './../shared/OptionBtn';
// import Menu from './Menu';
// import Reload from './Reload';
// import Back from './Back';
import Categories from './Categories';
// import TagsBtn from './TagsBtn';
// import images from './../../utils/images';
import { filterType } from './../../types/index';

const ServicesPage = ({ formOpen, ...props }) => (
  <div className={styles['simple-container']}>
    <CurrentView
      filter={props.filter}
      handleFilterClick={props.handleFilterClick}
    >
      <Subtitle subtitle="Services" />
    </CurrentView>
    <div className={styles['services-box']}>
      <MenuOverlay
        handleDisplayCategories={props.handleDisplayCategories}
        displayCategories={props.displayCategories}
        handleTagMenu={props.handleTagMenu}
        handleMenuOverlayChange={props.handleMenuOverlayChange}
        handleFilterChange={props.handleFilterChange}
        tagMenu={props.tagMenu}
        menuOverlay={props.menuOverlay}
        handleSearchBoxChange={props.handleSearchBoxChange}
        searchBox={props.searchBox}
      >
        <Categories
          handleFilterClick={props.handleFilterClick}
          handleDisplayCategories={props.handleDisplayCategories}
        />
        <FilterByTags
          filter={props.filter}
          handleInputChange={props.handleInputChange}
        />
        <OpenFormBtn text="" />
      </MenuOverlay>
      {(!props.filter.filteredView && props.searchBox && !formOpen) &&
      <Search
        filter={props.filter}
        handleInputChange={props.handleInputChange}
        handleSearchClick={props.handleSearchClick}
      />}
      {console.log('service form', formOpen)}
      {formOpen && props.children}
      {(props.filter.filteredView && !props.searchBox && !formOpen) &&
        <FilteredView
          loaded={props.loaded}
          filter={props.filter}
          handleInputChange={props.handleInputChange}
        />
      }
    </div>
  </div>
);

const mapStateToProps = state => (
  {
    formOpen: state.formView.formOpen,
  }
);

ServicesPage.propTypes = {
  formOpen: bool,
  children: node,
  loaded: bool,
  handleInputChange: func,
  handleFilterClick: func,
  handleSearchClick: func,
  handleDisplayCategories: func,
  handleTagMenu: func,
  handleMenuOverlayChange: func,
  handleSearchBoxChange: func,
  handleFilterChange: func,
  filter: filterType,
  filteredView: bool,
  displayCategories: bool,
  tagMenu: bool,
  menuOverlay: bool,
  searchBox: bool,
};
ServicesPage.defaultProps = {
  formOpen: false,
  loaded: false,
  children: null,
  handleInputChange: null,
  handleFilterClick: null,
  handleSearchClick: null,
  handleDisplayCategories: null,
  handleTagMenu: null,
  handleMenuOverlayChange: null,
  handleSearchBoxChange: null,
  handleFilterChange: null,
  filter: null,
  filteredView: false,
  displayCategories: false,
  tagMenu: false,
  menuOverlay: false,
  searchBox: false,
};

export default connect(mapStateToProps)(ServicesPage);
