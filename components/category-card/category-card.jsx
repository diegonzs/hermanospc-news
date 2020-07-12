import React from 'react';
import { MainNewsCard } from 'components/main-news-card';
import { ListNewsCard } from 'components/list-news-card';
import { Title } from 'components/title/title';

import PropTypes from 'prop-types';
//@ts-ignore
import styles from './category-card.module.scss';
import Link from 'next/link';

/**
 * @typedef {Object} title
 * @property {string} text - List of card to be displayed under the main card
 * @property {string} emoji - title of section
 */
/**
/**
 * @typedef {Object} categoryCardProps  
 * @property {News[]} news - List of card to be displayed under the main card
 * @property {title} [title] - title of section
 */
/**
 * This is the category card component for the news section
 * @param {categoryCardProps} props
 */
export const CategoryCard = ({ title, news }) => {
	const firstNews = news[0];
	const moreNews = news.slice(1);
	return (
		<div className={styles.container}>
			{title && <Title text={title.text} emoji={title.emoji} />}
			<MainNewsCard {...firstNews} />
			<ListNewsCard newsCards={moreNews} />
			<div className={styles.showMoreContainer}>
				<div className={styles.divider} />
				<Link href="/news-category/[slug]" as="/news-category/hello-world">
					<a className={styles.showMoreLink}>Show more</a>
				</Link>
			</div>
		</div>
	);
};

CategoryCard.propTypes = {
	title: PropTypes.shape({
		text: PropTypes.string,
		emoji: PropTypes.string,
	}),
	news: PropTypes.array.isRequired,
};
