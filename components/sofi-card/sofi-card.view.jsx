import React from 'react';
import styles from './sofi-description.module.scss';
import { Name } from './name';
import { Description } from './description';

export const SofiCardView = ({ user }) => {
  return (
    <div className={styles.container}>
      <Name name={user.username} />
      <Description />
    </div>
  )
}
