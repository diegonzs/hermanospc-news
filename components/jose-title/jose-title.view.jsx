import React from 'react';
//@ts-ignore
import styles from './jose-title.module.scss';

export const JoseTitleView = ({ username }) => {
  return (
    <h1 className={styles.title}>Esta es mi pagina! {username}</h1>
  )
}