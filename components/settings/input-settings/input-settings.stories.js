import * as React from 'react';
import { InputSettingsView } from './input-settings.view';

export default {
  title: 'InputSettings',
  component: InputSettingsView,
}

export const withoutInput = () => (
  <div style={{ padding: '30px' }}>
    <InputSettingsView
      id="username"
      value="diegonzs"
      isChanging={false}
      onChangeHandler={(_value) => { return }}
      onBlurHandler={() => { return }}
      onClickHandler={() => { return }}
    />
  </div>
)

export const withInput = () => (
  <div style={{ padding: '30px' }}>
    <InputSettingsView
      id="username"
      value="diegonzs"
      isChanging={true}
      onChangeHandler={(_value) => { return }}
      onBlurHandler={() => { return }}
      onClickHandler={() => { return }}
    />
  </div>
)

