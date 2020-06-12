import React from 'react';
import { Name } from './name';
import { Description } from './description';
import { Image } from 'components/image';
//@ts-ignore
import styles from './sofi-description.module.scss';


//@ts-ignore
import bellIcon from '/images/icons/bell.png';
//@ts-ignore
import bellIconWebp from '/images/icons/bell.png?webp';

export const SofiCardView = ({ user }) => {
  return (
    <div className={styles.container}>
      <Name name={user.username} />
      <Description />
      <Image imgClassName={styles.image} srcOriginal={bellIcon} srcWebp={bellIconWebp} type="png" alt="bell" />
      {/* <Button text="CLICK ME" user={{ name: 'diego', age: 25 }} /> */}
    </div>
  )
}
