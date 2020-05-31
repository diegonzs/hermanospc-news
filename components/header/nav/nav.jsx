import React from 'react';
// @ts-ignore
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <div className={styles.item}><li><a href="https://hermanospc.co/">News</a></li></div>
        <div className={styles.item}><li><a href="https://hermanospc.co/calculator"><span>!</span> PC Calculator</a></li></div>
        <div className={styles.item}><li><a href="https://hermanospc.co/free-to-play">F2P Games</a></li></div>
        <div className={styles.item}><li><a href="https://hermanospc.co/wallapers">Wallpapers</a></li></div>
        <div className={styles.item}><li><a href="https://hermanospc.co/">Shop</a></li></div>
        <div className={styles.item}><li><a href="https://hermanospc.co/">Blog</a></li></div>
      </ul>
    </nav>
  )
}
