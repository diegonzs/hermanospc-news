import * as React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import styles from './checkbox.module.scss';

/**
 * @typedef {Object} CheckboxProps
 * @property {string} id - ID.
 * @property {boolean} isChecked - Flag that determines the the state of the checkbox.
 * @property {string} label - Text that goes next to the checkbox.
 * @property {function} onChangeHandler - On change handler for the input.
 */

/**
 * Checkbox.
 * @param {CheckboxProps} props 
 */
export const Checkbox = ({ id, isChecked, onChangeHandler, label }) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <div className={`${styles.checkbox}  ${isChecked ? styles.active : ''}`}></div>
      <input
        id={id}
        type="checkbox"
        value={`${isChecked}`}
        onChange={() => onChangeHandler()}
        className={styles.input}
      />
      {label}
    </label>
  )
}

Checkbox.propTypes = {
  /** ID */
  id: PropTypes.string.isRequired,
  /** Flag that determines the the state of the checkbox. */
  isChecked: PropTypes.bool.isRequired,
  /** Text that goes next to the checkbox. */
  label: PropTypes.string.isRequired,
  /** On change handler for the input. */
  onChangeHandler: PropTypes.func.isRequired,
}