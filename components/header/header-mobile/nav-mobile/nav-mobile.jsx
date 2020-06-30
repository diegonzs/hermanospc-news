import React from 'react';
// @ts-ignore
import styles from './nav-mobile.module.scss';

const navigationList = [
  {
    link: 'https://hermanospc.co/',
    name: 'News',
  },
  {
    link: 'https://hermanospc.co/calculator',
    name: 'PC Calculator',
  },
  {
    link: 'https://hermanospc.co/free-to-play',
    name: 'F2P Games',
  },
  {
    link: 'https://hermanospc.co/wallapers',
    name: 'Wallpapers',
  },
  {
    link: 'https://hermanospc.co/',
    name: 'Shop',
  },
  {
    link: 'https://hermanospc.co/',
    name: 'Blog',
  },
]

export const NavMobile = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigationList.map((value) => (
            <li className={styles.item}>
              <a href={value.link}>
                {value.name === 'PC Calculator' && <span>! </span>}{value.name}
              </a>
            </li>
        ))}
        
      </ul>
    </nav>
  )
}
