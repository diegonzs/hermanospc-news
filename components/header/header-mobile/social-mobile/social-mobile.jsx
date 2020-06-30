import React from 'react';
import SVG from 'react-inlinesvg';
// @ts-ignore
import styles from './social-mobile.module.scss';

const socialMediaList = [
  {
    link: 'https://instagram.com/hermanospc',
    icon: '/images/social/instagram.svg',
  },
  {
    link: 'https://facebook.com/hermanospc',
    icon: '/images/social/facebook.svg',
  },
  {
    link: 'https://twitter.com/hermanospc',
    icon: '/images/social/twitter.svg',
  },
  {
    link: 'https://tiktok.com/hermanospc',
    icon: '/images/social/tiktok.svg',
  },
  {
    link: '#',
    icon: '/images/social/linkedin.svg',
  },
  {
    link: 'https://discord.com/hermanospc',
    icon: '/images/social/discord.svg',
  },
  {
    link: '#',
    icon: '/images/social/telegram.svg',
  },
] 

export const SocialMobile = () => {
  return (
    <div className={styles.social}>
      <ul className={styles.list}>
        {socialMediaList.map((value) => (
          <li className={styles.item}>
            <a href={value.link} target="_blank"><SVG className={styles.icon} src={value.icon} /></a>
          </li>
        ))}
      </ul>
    </div>
  )
}
