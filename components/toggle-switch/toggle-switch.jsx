import * as React from 'react';
import PropTypes from 'prop-types';

//@ts-ignore
import styles from './toggle-switch.module.scss';

/**
 * @typedef {Object} ToggleSwitchProps
 * @property {boolean} isActive - Determines if the toggle is active or not.
 * @property {() => void} onClickHandler - Function to run when clicked
 */

/**
 * switchToggle
 * @param {ToggleSwitchProps} props
 */
export const ToggleSwitch = ({ isActive, onClickHandler }) => {
  return (
    <div
      className={`${styles.toggleSwitch} ${isActive ? styles.isActive : ''}`}
      onClick={() => onClickHandler()}
    ></div>
  )
}

ToggleSwitch.propTypes = {
  /** Determines if the toggle is active or not. */
  isActive: PropTypes.bool.isRequired,
  /** Function to run when clicked */
  onClickHandler: PropTypes.func.isRequired,
}
