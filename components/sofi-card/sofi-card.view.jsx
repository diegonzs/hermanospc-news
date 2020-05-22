import React from 'react';
import styles from './sofi-description.module.scss';
import { Name } from './name';
import { Description } from './description';
import { Button } from 'components/button';

export const SofiCardView = ({ user }) => {
  return (
    <div className={styles.container}>
      <Name name={user.username} />
      <Description />
      <Button>CLICK ME :P</Button>
    </div>
  )
}
