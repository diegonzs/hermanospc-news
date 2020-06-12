import * as React from 'react';
import { ToggleSwitch } from './toggle-switch';

export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
}

export const active = () => (
  <div style={{ padding: '30px' }}>
    <ToggleSwitch
      isActive
      onClickHandler={() => { return }}
    />
  </div>
)

export const desactive = () => (
  <div style={{ padding: '30px' }}>
    <ToggleSwitch
      isActive={false}
      onClickHandler={() => { return }}
    />
  </div>
)