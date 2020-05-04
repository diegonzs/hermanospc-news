import React from 'react';
import styles from './header.module.scss';
import { Logo } from './logo';
import { Nav } from './nav';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <Nav />
      </div>
    </div>
  )
}