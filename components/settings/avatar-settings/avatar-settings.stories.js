import * as React from 'react';
import { AvatarSettingsView } from './avatar-settings.view';

export default {
  title: 'AvatarSettings',
  component: AvatarSettingsView,
}

export const defaultAvatar = () => (
  <div style={{ padding: '30px' }}>
    <AvatarSettingsView
      avatar=""
      username=""
    />
  </div>
)
