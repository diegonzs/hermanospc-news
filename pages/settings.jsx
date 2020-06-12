import * as React from 'react';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { Settings as SettingsComponent } from 'components/settings';
import { OnlyUsers } from 'components/only-users';

const Settings = ({ isServer }) => {
  return (
    <OnlyUsers isServer={isServer}>
      <PageContainer>
        <Column gap="90" justify="center">
          <HeadPage title="Profile" emoji="😃" />
          <SettingsComponent
            userSettings={{
              email: 'diego.ags04@gmail.com',
              username: 'diegonzs',
              avatar: '',
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
        </Column>
      </PageContainer>
    </OnlyUsers>
  )
}

export default Settings;