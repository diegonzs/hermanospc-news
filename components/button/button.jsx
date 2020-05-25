import React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './button.module.scss';

/**
 * @typedef {Object} ButtonProps
 * @property {string} text - the text that would be insie de button
 * @property {User} user - the user
 */

/**
 * This buttons is used all over the place
 * @param {ButtonProps} props
 */

export const Button = ({ text, user }) => {
  return (
    <div>
      <button className={styles.button}>{text} / {user.name}</button>
    </div>
  )
}

Button.propTypes = {
  /** the text that would be inside the button */
  text: PropTypes.string.isRequired,
  /** The user */
  user: PropTypes.shape({
    /** name of the user */
    name: PropTypes.string,
    /** age of the user */
    age: PropTypes.number
  }).isRequired
}

Button.defaultProps ={
  text: 'Diego',
}

