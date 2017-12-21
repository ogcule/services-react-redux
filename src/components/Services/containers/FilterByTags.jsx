import React from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import styles from './../styles/filterByTags.scss';
import { tags } from './../../../data/categories';
import { getFilteredTags } from './../../../actions/serviceActions';

class FilterByTags extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('filter submit');
    if (!this.input.value.trim()) {
      return;
    }
    this.props.dispatch(getFilteredTags(this.input.value));
  }
  render() {
    return (
      <div className={styles['tags-filter-menu']}>
        <form
          className={styles['filter-by-tags']}
        >
          <label htmlFor="tags">
            <span>Filter by tags {this.props.category && `in ${this.props.category}`}: </span>
            <select
              id="tags"
              name="tags"
              ref={(node) => {
                this.input = node;
              }}
              onChange={this.handleSubmit}
            >
              <option value="">Select one:</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    category: state.services.filter.category,
  }
);

FilterByTags.propTypes = {
  category: string,
  dispatch: func,
};

FilterByTags.defaultProps = {
  category: '',
  dispatch: null,
};

export default connect(mapStateToProps)(FilterByTags);
