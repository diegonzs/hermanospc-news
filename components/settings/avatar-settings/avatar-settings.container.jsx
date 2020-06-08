import * as React from 'react';
import { AvatarSettingsView } from './avatar-settings.view';

/**
 * @typedef {Object} AvatarSettingsContainerProps
 * @property {string} avatar - src for the image tag.
 * @property {string} [username] - alt content for the img tag.
 */

/**
 * This component is in charge to show an change the user's avatar.
 * @param {AvatarSettingsContainerProps} props
 */
export const AvatarSettingsContainer = ({ avatar, username }) => {
  return (
    <AvatarSettingsView
      avatar={avatar}
      username={username}
    />
  )
}