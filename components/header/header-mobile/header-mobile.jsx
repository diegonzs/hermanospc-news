import * as React from 'react';
// @ts-ignore
import styles from './header-mobile.module.scss';
import { NavMobile } from './nav-mobile';
import { SocialMobile } from './social-mobile';
import { ContactMobile } from './contact-mobile';

export const HeaderMobile = ({ isMenuOn }) => {
  return (
    <div className={`${styles.container} ${isMenuOn ? styles.menuOn : ''}`}>
      <NavMobile />
      <div className={styles.bottom}>
        <SocialMobile />
        <ContactMobile />
      </div>
    </div>
  )
}