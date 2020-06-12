import * as React from 'react';
import { NotificationOption } from './notification-option';

export default {
  title: 'NotificationOption',
  component: NotificationOption,
}

export const activeOption = () => (
  <div style={{ padding: '30px', maxWidth: '435px' }}>
    <NotificationOption
      id="option1"
      isActive
      updateSettings={(_value) => { return }}
      title="Subscribe to Weekly Digest"
      description="Our email summary every Monday"
    />
  </div>
)
export const desactiveOption = () => (
  <div style={{ padding: '30px', maxWidth: '435px' }}>
    <NotificationOption
      id="option1"
      isActive={false}
      updateSettings={(_value) => { return }}
      title="Subscribe to Weekly Digest"
      description="Our email summary every Monday"
    />
  </div>
)