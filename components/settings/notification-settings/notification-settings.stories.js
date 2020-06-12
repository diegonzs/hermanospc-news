import * as React from 'react';
import { NotificationSettings } from './notification-settings';

export default {
  title: 'NotificationSettings',
  component: NotificationSettings,
}

export const simple = () => (
  <div style={{ padding: '30px' }}>
    <NotificationSettings
      settings={[
        {
          id: 'asdasd',
          title: 'Subscribe to Weekly Digest',
          description: 'Our email summary every Monday',
          isActive: false,
        },
        {
          id: 'dsfsdf',
          title: 'Push alert of last news',
          description: 'Receive notifications for relevant news',
          isActive: true,
        },
      ]}
      updateSettings={(_value) => { return }}
    />
  </div>
)