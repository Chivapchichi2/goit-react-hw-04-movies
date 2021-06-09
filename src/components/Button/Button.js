import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, name }) => (
  <button type="button" onClick={onClick} className={styles.Button}>
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  // disabled: PropTypes.bool.isRequired,
};

export default Button;
