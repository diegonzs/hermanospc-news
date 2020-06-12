import * as React from 'react';
import PropTypes from 'prop-types';
import { UserSettings } from './user-settings';
import { NotificationSettings } from './notification-settings';
import { Column } from 'components/column';

//@ts-ignore
import styles from './settings.module.scss';

/**
 * @typedef {Object} SettingsViewProps
 * @property {UserSettingsProps} userSettings
 * @property {NotificationSettingsProps} notificationSettings 
 */

/**
 * This component shows all the settings.
 * @param {SettingsViewProps} props
 */
export const SettingsView = ({ userSettings, notificationSettings }) => {
  return (
    <div className={styles.container}>
      <Column gap="81">
        <UserSettings {...userSettings} />
        <NotificationSettings {...notificationSettings} />
      </Column>
    </div>
  )
}

SettingsView.propTypes = {
  /** Check UserSettings Component to see the props. */
  userSettings: PropTypes.object.isRequired,
  /** Check NotificationSettings Component see to the props. */
  notificationSettings: PropTypes.object.isRequired,
}
