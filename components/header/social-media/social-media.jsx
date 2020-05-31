import React from 'react';
// @ts-ignore
import styles from './social-media.module.scss';

export const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <ul className={styles.list}>
        <li><a href="#">icon</a></li>
        <li><a href="#">icon</a></li>
        <li><a href="#">icon</a></li>
        <li><a href="#">icon</a></li>
        <li><a href="#">icon</a></li>
      </ul>
    </div>
  )
}
