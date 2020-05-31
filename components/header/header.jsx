import React from 'react';
import { Logo } from './logo';
import { Nav } from './nav';
// @ts-ignore
import styles from './header.module.scss';
import { SocialMedia } from './social-media';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <Nav />
        <SocialMedia />
      </div>
    </div>
  )
}
