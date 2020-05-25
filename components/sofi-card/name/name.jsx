import React from 'react';
//@ts-ignore
import styles from './name.module.scss';

export const Name = ({ name }) => {
  return (
    <p className={styles.name}>{name}</p>
  )
}
