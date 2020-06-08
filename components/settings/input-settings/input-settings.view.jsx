import * as React from 'react';
import PropTypes from 'prop-types';

//@ts-ignore
import styles from './input-settings.module.scss';
import { Row } from 'components/row';

/**
 * @typedef {Object} InputSettingsViewProps
 * @property {string} value - current value.
 * @property {string} id - ID to identify the input.
 * @property {boolean} isChanging - Flag to determine is the value is changing.
 * @property {(string) => void} onChangeHandler - Function use to update the value. 
 * @property {() => void}  onClickHandler - Function use to toggle the visual.
 * @property {() => void}  onBlurHandler - Function to triger when the input loose focus.
 */

 /**
 *  Component use to show or edit a property.
 * @param {InputSettingsViewProps} props
 */
export const InputSettingsView = ({ isChanging, value, onChangeHandler, onClickHandler, onBlurHandler, id }) => {
  return (
    <Row isGrid gap="32">
      {isChanging
        ? (
          <input
            id={id}
            className={styles.input}
            onBlur={() => onBlurHandler()}
            type="text"
            value={value}
            onChange={e => onChangeHandler(e.target.value)}
          />
        ) : (
          <span className={styles.value}>{value}</span>
        )
      }
      <label htmlFor={id} className={styles.toggle} onClick={() => onClickHandler()}>{isChanging ? 'Save' : 'Change'}</label>
    </Row>
  )
}

InputSettingsView.propTypes = {
  /** current value. */
  value: PropTypes.string.isRequired,
  /** ID to identify the input. */
  id: PropTypes.string.isRequired,
  /** Flag to determine is the value is changing. */
  isChanging: PropTypes.bool.isRequired,
  /** Function use to update the value.  */
  onChangeHandler: PropTypes.func.isRequired,
  /** Function use to toggle the visual. */
  onClickHandler: PropTypes.func.isRequired,
  /** Function to triger when the input loose focus. */
  onBlurHandler: PropTypes.func.isRequired,
}