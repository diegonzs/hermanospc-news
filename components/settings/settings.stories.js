import * as React from 'react';
import { SettingsView } from './settings.view';

export default {
  title: 'Settings',
  component: SettingsView,
}

export const simple = () => (
  <div style={{ padding: '30px' }}>
    <SettingsView
      userSettings={{
        email: 'diego.ags04@gmail.com',
        username: 'diegonzs'
      }}
      notificationSettings={{
        settings: [
          {
            title: 'Subscribe to Weekly Digest',
            description: 'Our email summary every Monday',
            id: 'sdasdasd',
            isActive: true,
          },
          {
            title: 'Push alert of last news',
            description: 'Receive notifications for relevant news',
            id: 'sdasdasd',
            isActive: false,
          },
        ],
        updateSettings: () => { return }
      }}
    />
  </div>
)