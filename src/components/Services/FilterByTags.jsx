import React from 'react';
import styles from './styles/filterByTags.scss';
import { func, string } from 'prop-types';
import { tags } from './../../data/categories';

const FilterByTags = ({
  category,
  handleSubmit,
}) => {
  let input = null;
  return (
  <div className={styles['tags-filter-menu']}>
    <form
      className={styles['filter-by-tags']}
    >
      <label htmlFor="tags">
        <span>Filter by tags {category && `in ${category}`}: </span>
        <select
          id="tags"
          name="tags"
          ref={(node) => {
            input = node;
          }}
          onChange={handleSubmit(e, input)}
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
)
};

FilterByTags.propTypes = {
  category: string,
  handleSubmit: func,
};

FilterByTags.defaultProps = {
  category: '',
  handleSubmit: null,
};

export default FilterByTags;
