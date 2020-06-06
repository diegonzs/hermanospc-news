import * as React from 'react';
import { WithoutUserUI } from './without-user-ui';

export default {
  title: 'WithoutUserUI',
  component: WithoutUserUI,
};

export const withoutUser = () => (
  <div style={{
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <WithoutUserUI />
  </div>
)
