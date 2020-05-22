import React from 'react';
import styles from './button.scss';

export const Button = ({ children }) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export const name = 'diego';

