import * as React from 'react';
import { UserAuthView } from './user-auth.view';
import { UserContext } from 'context/user-context';
import firebase from '../../lib/firebase-client';

export const UserAuthContainer = () => {
  const user = React.useContext(UserContext);
  const signout = () => {
    firebase.auth().signOut()
  }
  return (
    <UserAuthView
      userData={{
        username: 'diegonzs',
        avatar: '',
        signout: () => { signout() }
      }}
      isUserSignedIn={!!user}
    />
  )
}