import React from 'react';
import SVG from 'react-inlinesvg';
// @ts-ignore
import styles from './social-media.module.scss';

const socialMediaList = [
	{
		link: 'https://instagram.com/hermanospc',
		icon: '/images/social/instagram.svg',
		key: 'isntagram',
	},
	{
		link: 'https://facebook.com/hermanospc',
		icon: '/images/social/facebook.svg',
		key: 'facebook',
	},
	{
		link: 'https://twitter.com/hermanospc',
		icon: '/images/social/twitter.svg',
		key: 'twitter',
	},
	{
		link: 'https://tiktok.com/hermanospc',
		icon: '/images/social/tiktok.svg',
		key: 'ticktok',
	},
	// {
	// 	link: '#',
	// 	icon: '/images/social/linkedin.svg',
	// 	key: 'linkedin',
	// },
	{
		link: 'https://discord.gg/PJTaMmn',
		icon: '/images/social/discord.svg',
		key: 'discord',
	},
];

export const SocialMedia = () => {
	return (
		<ul className={styles.list}>
			{socialMediaList.map((value) => (
				<li className={styles.item} key={value.key}>
					<a href={value.link} target="_blank" rel="noopener">
						<SVG className={styles.icon} src={value.icon} />
					</a>
				</li>
			))}
		</ul>
	);
};
