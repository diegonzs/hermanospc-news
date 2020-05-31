import React from 'react';
// @ts-ignore
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href="#">Link-1</a></li>
        <li><a href="#">Link-2</a></li>
        <li><a href="#">Link-3</a></li>
        <li><a href="#">Link-4</a></li>
        <li><a href="#">Link-5</a></li>
      </ul>
    </nav>
  )
}
