import React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './button.module.scss';

/**
 * @typedef {Object} Props
 * @property {string} text
 */

/**
 * This buttons is used all over the place
 * @param {Props} props
 */

export const Button = ({ text }) => {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

Button.defaultProps ={
  text: 'Diego',
}

