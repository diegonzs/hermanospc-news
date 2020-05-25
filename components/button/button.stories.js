import * as React from 'react';
import { Button } from './button';

export default {
  title: 'Button XD',
  component: Button,
  parameters: {
    componentSubtitle: 'This button does something',
  }
}
/**
 * @type {import('./button').ButtonProps}
 */
const mainButtonProps = {
  text: 'Default Button',
  user: {
    name: 'diego',
    age: 25
  }
}

export const mainButton = () => <Button {...mainButtonProps} />
export const hoverButton = () => <Button text="Hover Button" user={mainButtonProps.user}/>
export const defaultButton = () => <Button user={mainButtonProps.user}/>