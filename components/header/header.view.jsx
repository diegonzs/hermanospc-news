import * as React from 'react';
import { Logo } from './logo';
import { Nav } from './nav';
import { SocialMedia } from './social-media';
import { Contact } from './contact';
// @ts-ignore
import styles from './header.module.scss';
import { MenuToggle } from './menu-toggle';
import { HeaderDesktop } from './header-desktop/header-desktop';
import { HeaderMobile } from './header-mobile';

export const HeaderView = ({ isMenuOn, toggleIsMenuOn }) => {
  return (
    <>
      <HeaderDesktop isMenuOn={isMenuOn} toggleIsMenuOn={toggleIsMenuOn} />
      <HeaderMobile isMenuOn={isMenuOn} />
    </>
  )
}
