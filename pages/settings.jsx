import * as React from 'react';
import { UserContext } from 'context/user-context';
import Router from 'next/router';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { Settings as SettingsComponent } from 'components/settings';

const Settings = () => {
  const user = React.useContext(UserContext);
  
  /** Redirect the user to home if he/she isn't logged in */
  React.useEffect(() => {
    if (!user) {
      Router.push('/')
    }
  }, [user])
  
  return (
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
  )
}

export default Settings;