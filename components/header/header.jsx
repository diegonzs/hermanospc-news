import * as React from 'react';
import { Logo } from './logo';
import { Nav } from './nav';
import { SocialMedia } from './social-media';
import { Contact } from './contact';
// @ts-ignore
import styles from './header.module.scss';


export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <Nav />
        <SocialMedia />
        <Contact />
      </div>
    </div>
  )
}
