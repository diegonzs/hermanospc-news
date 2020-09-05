import React from 'react';
import { MainNewsCard } from 'components/main-news-card';
import { ListNewsCard } from 'components/list-news-card';
import { Title } from 'components/title/title';

import PropTypes from 'prop-types';
//@ts-ignore
import styles from './category-card.module.scss';
import Link from 'next/link';
import { Loader } from 'components/loader';

/**
 * @typedef {Object} title
 * @property {string} text - List of card to be displayed under the main card
 * @property {string} emoji - title of section
 */
/**
/**
 * @typedef {Object} categoryCardProps  
 * @property {News[]} news - List of card to be displayed under the main card
 * @property {title} [title] - Title of section
 * @property {string} slug - Slug to do the linking
 * @property {boolean} [loading] - Loading state
 */
/**
 * This is the category card component for the news section
 * @param {categoryCardProps} props
 */
export const CategoryCard = ({ title, news, slug, loading = false }) => {
	const firstNews = news[0];
	const moreNews = news.slice(1);

	return (
		<div className={styles.container}>
			{title && <Title text={title.text} emoji={title.emoji} />}
			{loading && (
				<div className={styles.loaderContainer}>
					<Loader />
				</div>
			)}
			{!loading &&
				(!news.length ? (
					<h2>There's no news in this categories</h2>
				) : (
					<>
						<MainNewsCard {...firstNews} />
						<ListNewsCard newsCards={moreNews} />
						<div className={styles.showMoreContainer}>
							<div className={styles.divider} />
							<Link href="/news-category/[slug]" as={`/news-category/${slug}`}>
								<a className={styles.showMoreLink}>Show more</a>
							</Link>
						</div>
					</>
				))}
		</div>
	);
};

CategoryCard.propTypes = {
	/** Object that contains title info */
	title: PropTypes.shape({
		text: PropTypes.string,
		emoji: PropTypes.string,
	}),
	/** Array of news to be rendered */
	news: PropTypes.array.isRequired,
	/** Slug to do the linking */
	slug: PropTypes.string.isRequired,
	/** Loading state */
	loading: PropTypes.bool,
};

CategoryCard.defaultProps = {
	loading: false,
};
