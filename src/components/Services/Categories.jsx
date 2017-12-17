import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { categories } from './../../data/categories';
import styles from './styles/categories.scss';
import { getFilteredCategory } from './../../actions/serviceActions';


const Categories = ({ dispatch }) => (
  <div className={styles['categories-container']} >
    <ul className={styles.categories}>
      {categories.map(category => (
        <li key={category}>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(getFilteredCategory(category));
            }}
          >
            {category}
          </button>
        </li>
        ))
      }
    </ul>
  </div>
);

Categories.propTypes = {
  dispatch: func,
};

Categories.defaultProps = {
  dispatch: null,
};

export default connect()(Categories);
