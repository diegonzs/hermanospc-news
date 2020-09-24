import Link from 'next/link';
import React from 'react';
// @ts-ignore
import styles from './nav.module.scss';

const navigationList = [
	{
		link: 'https://news.hermanospc.co/',
		name: 'News',
		id: 'news',
	},
	{
		link: 'https://hermanospc.co/calculator',
		name: 'PC Calculator',
		id: 'pc-calculator',
	},
	{
		link: 'https://hermanospc.co/free-to-play',
		name: 'F2P Games',
		id: 'f2p-games',
	},
	{
		link: 'https://hermanospc.co/wallapers',
		name: 'Wallpapers',
		id: 'wallpapers',
	},
	// {
	// 	link: 'https://hermanospc.co/',
	// 	name: 'Shop',
	// 	id: 'shop',
	// },
	{
		link: 'https://hermanospc.co/',
		name: 'Blog',
		id: 'blog',
	},
];

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{navigationList.map((value) => (
					<li className={styles.item} key={value.id}>
						{value.id === 'news' ? (
							<Link href="/">
								<a>{value.name}</a>
							</Link>
						) : (
							<a href={value.link}>
								{value.name === 'PC Calculator' && <span>! </span>}
								{value.name}
							</a>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};
