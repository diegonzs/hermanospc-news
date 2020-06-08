import * as React from 'react';
import { UserAuthView } from './user-auth.view';

export default {
  title: 'UserAuth',
  component: UserAuthView,
};

export const withoutUser = () => (
  <div style={{
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <UserAuthView
      isUserSignedIn={false}
    />
  </div>
)
export const withUser = () => (
  <div style={{
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <UserAuthView
      userData={{
        username: 'Diegonzs',
        avatar: '',
        signout: () => {return}
      }}
      isUserSignedIn={true}
    />
  </div>
)
