import * as React from 'react';
import { Title } from 'components/title';
//@ts-ignore
import newspaperIcon from '/images/icons/newspaper.png';
//@ts-ignore
import styles from './related-news.module.scss';
import { NewsCard } from 'components/news-card';

/**
 * @typedef {Object} RelatedNewsProps
 * @property {News[]} news
 * @property {string} category
 */

/**
 *
 * @param {RelatedNewsProps} props
 */
export const RelatedNewsView = ({ news, category }) => {
	return (
		<div className={styles.container}>
			<Title text={`More on ${category}`} icon={newspaperIcon} />
			<ul className={styles.listOfNews}>
				{news.map((n) => (
					<NewsCard news={n} key={`realated-${n.id}`} />
				))}
			</ul>
		</div>
	);
};
