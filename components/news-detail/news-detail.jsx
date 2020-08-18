import * as React from 'react';
import PropTypes from 'prop-types';
import { ContentComponent } from './content';
import { BackButton } from 'components/back-button';
import { ListTag } from 'components/list-tag';
import { RelatedNews } from './related-news';
import { Reactions } from './reactions';

// @ts-ignore
import styles from './news-detail.module.scss';

// const mainListTagProps = {
// 	tags: [{ text: 'AMD' }, { text: 'Graphic Card' }],
// 	gap: '20',
// };

/**
 * @typedef {Object} NewsDetailProps
 * @property {News} news - News
 * @property {() => void} [onBack] - Function to override back button behaviour
 */

/**
 * Component to show the news detail
 * @param {NewsDetailProps} props
 */
export const NewsDetail = ({ news, onBack }) => {
	const { title, source, tags, image, content } = news;
	return (
		<div className={styles.container}>
			<div className={styles.NewsDetailContainer}>
				<div className={styles.header}>
					<div className={styles.backbutton}>
						<BackButton text="Back" handleClick={onBack} />
					</div>
					<div className={styles.tags}>
						{tags && <ListTag tags={JSON.parse(tags)} />}
					</div>
				</div>
				<div className={styles.image}>
					<img src={image} />
				</div>
				<div className={styles.autor}>By {source.name}</div>
				<div className={styles.title}>
					<h1>{title}</h1>
				</div>
				<ContentComponent content={content} />
			</div>
			<Reactions />
			<RelatedNews />
		</div>
	);
};

NewsDetail.propTypes = {
	news: PropTypes.shape({
		/** Main image */
		image: PropTypes.string.isRequired,
		/** Title */
		title: PropTypes.string.isRequired,
		/** Source */
		source: PropTypes.shape({
			name: PropTypes.string,
			favicon: PropTypes.string,
		}).isRequired,
		/** How long since posted */
		created_at: PropTypes.string.isRequired,
		/** Where it sends the user when clicked. */
		original_link: PropTypes.string.isRequired,
		/** Link's content */
		content: PropTypes.string,
	}),
	/** Function to override back button functionality */
	onBack: PropTypes.func,
};
