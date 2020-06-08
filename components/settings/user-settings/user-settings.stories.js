import * as React from 'react';
import { UserSettings } from './user-settings';

export default {
  title: 'UserSettings',
  component: UserSettings,
}

export const simple = () => (
  <UserSettings
    username="diegonzs"
    email="diego.ags04@gmail.com"
    avatar=""
  />
)