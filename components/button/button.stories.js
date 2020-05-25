import * as React from 'react';
import { Button } from './button';

export default {
  title: 'Button XD',
  component: Button,
  parameters: {
    componentSubtitle: 'This button does something',
  }
}

const mainButtonProps = {
  text: 'Default Button'
}

export const mainButton = () => <Button {...mainButtonProps} />
export const hoverButton = () => <Button text="Hover Button" />
export const defaultButton = () => <Button />