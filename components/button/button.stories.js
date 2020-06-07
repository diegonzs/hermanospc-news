import * as React from 'react';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'This button does something',
  }
}

export const mainButton = () => (
  <Button
    text="Default Button"
    onClickHandler={() => {return}}
  />
)
export const emptyButtom = () => (
  <Button
    text="Empty Button"
    onClickHandler={() => {return}}
    isFilled={false}
  />
)
export const disabledButton = () => (
  <Button
    text="Disabled Button"
    onClickHandler={() => {return}}
    isDisabled={true}
  />
)
export const disabledEmptyButton = () => (
  <Button
    text="Disabled Empty Button"
    onClickHandler={() => {return}}
    isDisabled={true}
    isFilled={false}
  />
)
export const anchorMainButton = () => (
  <Button
    text= "Anchor Button"
    onClickHandler= {() => { return; }}
    isAnchor
    href="/"
  />
)
