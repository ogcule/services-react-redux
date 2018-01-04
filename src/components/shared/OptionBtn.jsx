import React from 'react';
import { string, func, bool } from 'prop-types';
import styles from './styles/optionBtn.scss';
import images from './../../utils/images';

const OptionBtn = ({
  image,
  text,
  clickHandler,
  active,
  menuOverlay,
}) => (
  <div className={styles['btn-div']}>
    {!menuOverlay && <p>{text}</p>}
    <button onClick={clickHandler}>
      {active ? <img src={images.closeIcon} alt="close" />
                    : <img src={image} alt="icon" />}
    </button>
  </div>
);
OptionBtn.propTypes = {
  image: string,
  text: string,
  clickHandler: func,
  active: bool,
  menuOverlay: bool,
};
OptionBtn.defaultProps = {
  image: '',
  text: '',
  clickHandler: null,
  active: false,
  menuOverlay: false,
};
export default OptionBtn;
