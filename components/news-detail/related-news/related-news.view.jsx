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
 */

/**
 *
 * @param {RelatedNewsProps} props
 */
export const RelatedNewsView = ({ news }) => {
	return (
		<div className={styles.container}>
			<Title text="Related News" icon={newspaperIcon} />
			<ul className={styles.listOfNews}>
				{news.map((n) => (
					<NewsCard news={n} />
				))}
			</ul>
		</div>
	);
};
