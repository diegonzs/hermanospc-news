import * as React from 'react';
// @ts-ignore
import styles from './header-mobile.module.scss';
import { NavMobile } from './nav-mobile';
import { SocialMobile } from './social-mobile';
import { ContactMobile } from './contact-mobile';

export const HeaderMobile = () => {
  return (
    <div className={styles.container}>
      <NavMobile />
      <div className={styles.bottom}>
        <SocialMobile />
        <ContactMobile />
      </div>
    </div>
  )
}