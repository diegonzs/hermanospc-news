import * as React from 'react';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { SocialMedia } from '../social-media';
import { Contact } from '../contact';
import { MenuToggle } from '../menu-toggle';
// @ts-ignore
import styles from './header-desktop.module.scss';


export const HeaderDesktop = () => {
  return (
    <header className={styles.container}>
        <div className={styles.content}>
          <Logo />
          <Nav />
          <SocialMedia />
          <Contact />
          <MenuToggle />
        </div>
      </header>
  )
}