import * as React from 'react';
// @ts-ignore
import styles from './logo.module.scss';
import Link from 'next/link';


export const Logo = () => {
  return (
  <>
    <Link href="/">
      <a href="/" className={styles.logo}>
        <img src="/brand/logo-complete.png"/>
      </a>
    </Link>
    
    <Link href="/">
      <a href="/" className={styles.logoResponsive}>
        <img className={styles.icon} src="/brand/monogram.png"/>
      </a>
    </Link>
  </>
  )
}
