import * as React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './input.module.scss';

/**
 * @typedef {Object} InputProps 
 * @property {string} id - ID value to identify the input
 * @property {string} label - The label of the input
 * @property {string} value - The value of the input
 * @property {"text" | "password"} type - Type of the input
 * @property {(value: string) => void} onChangeHandler - on change handler for the input
 * @property {() => void} [toggleTypeHandler] - Function to toggle the type of the input between type and password
 */

/**
 * Input comoponent for type text and password only
 * @param {InputProps} props 
 */
export const Input = ({ label, value, onChangeHandler, type="text", toggleTypeHandler, id }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
      <div className={styles.inputWrapper}>
        <label htmlFor={id} className={isActive || value ? styles.active : ''}>{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => onChangeHandler(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          required={true}
        />
        {toggleTypeHandler && (
          <button className={styles.button} onClick={toggleTypeHandler}>toggle</button>
        )}
      </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  onChangeHandler: PropTypes.func.isRequired,
  toggleTypeHandler: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
}

