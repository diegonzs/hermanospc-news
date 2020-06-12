import * as React from 'react';
import PropTypes from 'prop-types';
import { ToggleSwitch } from 'components/toggle-switch';
import { Row } from 'components/row';

//@ts-ignore
import styles from './notification-option.module.scss';

/**
 * @typedef {Object} NotificationOptionProps
 * @property {string} id - ID for the option
 * @property {boolean} isActive - Determines if the option is active.
 * @property {(value: string) => void} updateSettings - Function to update the option's status.
 * @property {string} title - Option's title
 * @property {string} description - Option's description
 */

/**
 * Use to show User's options.
 * @param {NotificationOptionProps} props
 */
export const NotificationOption = ({ id, isActive, updateSettings, title, description }) => {
  return (
    <Row>
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <ToggleSwitch
        isActive={isActive}
        onClickHandler={() => updateSettings(id)}
      />
    </Row>
  )
}

NotificationOption.propTypes = {
  /** ID for the option */
  id: PropTypes.string.isRequired,
  /** Determines if the option is active. */
  isActive: PropTypes.bool.isRequired,
  /** Function to update the option's status. */
  updateSettings: PropTypes.func.isRequired,
  /** Option's title */
  title: PropTypes.string.isRequired,
  /** Option's description */
  description: PropTypes.string.isRequired,
}