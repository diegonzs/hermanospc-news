import * as React from 'react';
import { HeaderView } from './header.view';

export const HeaderContainer = () => {
  const [isMenuOn, toggleIsMenuOn] = React.useState(false)
  
  return (
    <HeaderView  isMenuOn={isMenuOn} toggleIsMenuOn={() => toggleIsMenuOn(!isMenuOn)} />
  )
}
