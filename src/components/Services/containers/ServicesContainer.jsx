// made redundant
import React from 'react';
import ServicesPage from './../ServicesPage';
import apiServices from './../../../api/apiServices';
import AddNewServiceContainer from './AddNewServiceContainer';

class ServicesContainer extends React.Component {
  constructor(props) {
    super(props);
  handleFilterClick(e) {
    e.preventDefault();
    console.log('filter click');
    const { target } = e;
    const category = target.getAttribute('data-category');
    /* Pass in empty string parameter to reset tags. when
    category is selected. */
    this.getFilteredCategory(category, '');
    this.handleFilterChange();
    this.setState({
      searchBox: false,
    });
  }
  handleSearchClick(e) {
    e.preventDefault();
    if (this.state.filter.search) {
      apiServices.requestGetSearch(this.state.filter.search)
        .then((data) => {
          console.log(data);
          this.setState(prevState => ({
            filter: Object.assign(
              {},
              prevState.filter,
              {
                filteredServices: data,
                loaded: true,
                filteredView: true,
              },
            ),
            menuOverlay: false,
            searchBox: false,
          }));
        })
        .catch(err => console.log(err.message));
    } else {
      this.setState(prevState => ({
        filter: Object.assign(
          {},
          prevState.filter,
          {
            searchErr: true,
          },
        ),
      }));
    }
  }
  // handler for changing state from input values on the forms
  handleInputChange(e) {
    e.preventDefault();
    const { target } = e;
    const {
      value, name, dataset,
    } = target;
    /* switch to deal with multiple cases because onChange is also
    submitting on the select Menu */
    switch (true) {
      case (dataset.forms === 'getTags') && (value === '') && (dataset.category !== ''):
        this.getFilteredCategory(dataset.category, value);
        break;
      case (dataset.forms === 'getTags') && (value === ''):
        this.setState(prevState => ({
          filter: Object.assign(
            {},
            prevState.filter,
            {
              filteredView: false,
              tags: value,
            },
          ),
        }));
        break;
      case (dataset.forms === 'getTags') && (dataset.category === ''):
        this.getFilteredTags(value);
        break;
      case (dataset.forms === 'getTags') && (dataset.category !== ''):
        this.getFilteredBoth(dataset.category, value);
        break;
      case dataset.forms === 'search':
        console.log('search called');
        this.setState(prevState => (
          { filter: Object.assign({}, prevState.filter, { [name]: value }) }
        ));
        break;
      default:
        console.log('Error on input Change in ServicesContainer');
    }
  }
  render() {
    return (
      <ServicesPage>
        <AddNewServiceContainer />
      </ServicesPage>
    );
  }
}

export default ServicesContainer;
