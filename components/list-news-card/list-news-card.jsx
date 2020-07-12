import * as React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NewsCard } from 'components/news-card';

//@ts-ignore
import styles from './list-news-card.module.scss';
import { Loader } from '../loader';

/**
 * @typedef {Object} ListNewsCardProps
 * @property {boolean} [isInfinity] - Tells if the elements would have infinity scrollin
 * @property {"vertical" | "horizontal"} [scroll] - Tels how to render the elements
 * @property {News[]} newsCards - The list of news to render
 * @property {function} [fetchMoreHandler] - Handler to fetch more news.
 * @property {boolean} [hasMore] - Indicates if the are more news cards to fetch.
 */

/**
 * This component renders a list of News Cards
 * @param {ListNewsCardProps} props
 */
export const ListNewsCard = ({
	isInfinity = false,
	scroll = 'horizontal',
	newsCards,
	fetchMoreHandler,
	hasMore = false,
}) => {
	return (
		<ul
			className={`${styles.list} ${
				scroll === 'horizontal' ? styles.horizontal : ''
			}`}
		>
			{scroll === 'vertical' && isInfinity && fetchMoreHandler ? (
				<InfiniteScroll
					className={`${styles.list} ${styles[scroll]}`}
					dataLength={newsCards.length}
					// @ts-ignore
					next={fetchMoreHandler}
					hasMore={hasMore}
					loader={<Loader />}
					endMessage={<p>There are no more</p>}
				>
					{newsCards.map((news) => (
						<li key={news.id} className={styles.list}>
							<NewsCard news={news} isBig />
						</li>
					))}
				</InfiniteScroll>
			) : (
				<>
					{newsCards.map((news) => (
						<li key={news.id} className={`${styles.list} ${styles.horizontal}`}>
							<NewsCard news={news} />
						</li>
					))}
				</>
			)}
		</ul>
	);
};

ListNewsCard.propTypes = {
	/** Tells if the elements would have infinity scrollin */
	isInfinity: PropTypes.bool,
	/** Tels how to render the elements */
	scroll: PropTypes.oneOf(['vertical', 'horizontal']),
	/** The list of news to render */
	newsCards: PropTypes.array.isRequired,
	/** Handler to fetch more news. */
	fetchMoreHandler: PropTypes.func,
	/** Indicates if the are more news cards to fetch. */
	hasMore: PropTypes.bool,
};

ListNewsCard.defaultProps = {
	isInfinity: false,
	scroll: 'horizontal',
	hasMore: false,
};
