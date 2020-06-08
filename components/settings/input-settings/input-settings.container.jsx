import * as React from 'react';
import { InputSettingsView } from './input-settings.view';

export const inputSettingsContainer = ({ defaultValue, id }) => {
  const [value, setValue] = React.useState(defaultValue);
  const [previousValue, setPreviuosValue] = React.useState(defaultValue);
  const [isChanging, setIsChanging] = React.useState(false);
  
  const clickHandler = () => {
    if (isChanging) {
      setIsChanging(false)
    } else {
      setIsChanging(true)
      setPreviuosValue(value);
    }
  }

  return (
    <InputSettingsView
      id={id}
      value={value}
      isChanging={isChanging}
      onChangeHandler={(value) => setValue(value)}
      onClickHandler={clickHandler}
      onBlurHandler={() => {
        setValue(previousValue);
        setIsChanging(false);
      }}
    />
  )
}