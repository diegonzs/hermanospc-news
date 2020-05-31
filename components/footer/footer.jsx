import * as React from 'react';
// @ts-ignore
import styles from './footer.module.scss';


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.list}>
        <li><a href="https://hermanospc.co/legal" target="_blank">Legal</a></li>
        <li><a href="https://hermanospc.co/ambassadors" target="_blank">Ambassadors</a></li>
      </div>
      <p>© 2020. Hermanos PC.</p>
    </footer>
  )
}