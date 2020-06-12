import * as React from 'react';

//@ts-ignore
import styles from './page-container.module.scss';

export const PageContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}