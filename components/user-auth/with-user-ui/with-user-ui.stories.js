import * as React from 'react';
import { WithUserUI } from './with-user-ui';

export default {
  title: 'WithUserUI',
  component: WithUserUI,
};

export const defaultRow = () => (
  <div style={{
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <WithUserUI
      username="diegonzs"
      avatar=""
      signout={() => { return }}
    />
  </div>
)
