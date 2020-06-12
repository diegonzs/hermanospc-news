import * as React from 'react';
import { HeadPage } from './head-page';

export default {
  title: 'HeadPage',
  component: HeadPage,
}

export const simple = () => <HeadPage title="Profile" emoji="😃" />;
