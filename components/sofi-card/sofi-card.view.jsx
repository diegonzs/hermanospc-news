import React from 'react';
import { Name } from './name';
import { Description } from './description';
import { Button } from 'components/button';
//@ts-ignore
import styles from './sofi-description.module.scss';

export const SofiCardView = ({ user }) => {
  return (
    <div className={styles.container}>
      <Name name={user.username} />
      <Description />
      <Button text="CLICK ME" user={{ name: 'diego', age: 25 }} />
    </div>
  )
}
