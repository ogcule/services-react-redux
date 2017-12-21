import React from 'react';
import { bool, node, func } from 'prop-types';
import { connect } from 'react-redux';
import images from './../../../utils/images';
import OptionBtn from './../../shared/OptionBtn';
import styles from './../styles/menuOverlay.scss';

const MenuOverlay = ({
  menuOverlay,
  tagMenu,
  displayCategories,
  searchBox,
  children,
  dispatch,
}) => {
  const background = menuOverlay ?
    'transparent-bg' :
    'container';
  return (
    <div className={styles[background]}>
      <div className={styles['menu-container']}>
        {!tagMenu && <OptionBtn
          text="Categories"
          image={images.listIcon}
          active={displayCategories}
          clickHandler={() => {
            dispatch({
              type: 'TOGGLE_DISPLAY_CATEGORIES',
            });
          }}
        />}
        {!displayCategories && <OptionBtn
          text="Tags"
          image={images.tagIcon}
          active={tagMenu}
          clickHandler={() => {
            dispatch({
              type: 'TOGGLE_TAG_MENU',
            });
          }}
        />}
        {(!searchBox && !menuOverlay) && <OptionBtn
          text="Search"
          image={images.search}
          active={searchBox}
          clickHandler={() => {
             dispatch({
               type: 'SET_SEARCHBOX_VIEW',
             });
           }}
        />}
        {!menuOverlay && children[2]}
      </div>
      <div>
        {displayCategories && children[0]}
        {tagMenu && children[1]}
      </div>
    </div>
  );
};

const mapStateToProps = state => (
  {
    menuOverlay: state.services.menuOverlay,
    tagMenu: state.services.tagMenu,
    displayCategories: state.services.displayCategories,
    searchBox: state.services.searchBox,
  }
);

MenuOverlay.propTypes = {
  menuOverlay: bool,
  tagMenu: bool,
  displayCategories: bool,
  children: node,
  searchBox: bool,
  dispatch: func,
};
MenuOverlay.defaultProps = {
  menuOverlay: false,
  tagMenu: false,
  displayCategories: false,
  children: null,
  searchBox: false,
  dispatch: null,
};
export default connect(mapStateToProps)(MenuOverlay);
