import * as React from 'react';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { SocialMedia } from '../social-media';
import { Contact } from '../contact';
import { MenuToggle } from '../menu-toggle';
// @ts-ignore
import styles from './header-desktop.module.scss';


export const HeaderDesktop = ({ isMenuOn, toggleIsMenuOn }) => {
  return (
    <header className={`${styles.container} ${isMenuOn && styles.menuOn}`}>
        <div className={styles.content}>
          <Logo isMenuOn={isMenuOn} />
          <Nav />
          <SocialMedia />
          <Contact />
          <MenuToggle isMenuOn={isMenuOn} toggleIsMenuOn={toggleIsMenuOn} />
        </div>
      </header>
  )
}