import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import Service from './../Service';
import NoServices from './../NoServices';
import styles from './../styles/filterView.scss';
import { filterServicesType } from './../../../types/index';

const FilteredView = ({ loaded, filteredServices }) => {
  if (!loaded) {
    return <p>.....Loading</p>;
  }
  return (
    <div className={styles['filter-view-container']}>
      {filteredServices.length === 0 ? <NoServices /> :
       filteredServices.map(serviceInfo =>
        (<Service key={serviceInfo.id} serviceInfo={serviceInfo} />))
      }
    </div>
  );
};

const mapStateToProps = state => (
  {
    loaded: state.services.filter.loaded,
    filteredServices: state.services.filter.filteredServices,
  }

);
FilteredView.propTypes = {
  filteredServices: filterServicesType,
  loaded: bool,
};
FilteredView.defaultProps = {
  filteredServices: null,
  loaded: false,
};

export default connect(mapStateToProps)(FilteredView);
