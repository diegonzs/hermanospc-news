import * as React from 'react';
import PropTypes from 'prop-types';
import { NewsContext } from 'context/news-context';

// @ts-ignore
import styles from './news-card.module.scss';

/**
 * Use to show tthe preview of a new
 * @param {NewsCardProps} props
 */
export const NewsCard = ({ news, isBig }) => {
	const { title, image, source, created_at, original_link } = news;
	const { setSelectedNews } = React.useContext(NewsContext);
	return (
		<div
			onClick={() => {
				setSelectedNews(news);
			}}
			className={isBig ? styles.containerBigger : styles.container}
		>
			<img src={image} alt="" className={styles.image} />
			<div className={styles.contentContainer}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.row}>
					<span className={styles.source}>: {source}</span>
					<span className={styles.created_at}>{created_at}</span>
				</div>
			</div>
		</div>
	);
};

NewsCard.propTypes = {
	news: PropTypes.shape({
		/** Main image */
		image: PropTypes.string.isRequired,
		/** Title */
		title: PropTypes.string.isRequired,
		/** Source */
		source: PropTypes.string.isRequired,
		/** How long since posted */
		created_at: PropTypes.string.isRequired,
		/** Where it sends the user when clicked. */
		original_link: PropTypes.string.isRequired,
	}),
	/** Determines if the card is big.  */
	isBig: PropTypes.bool,
};

NewsCard.defaultProps = {
	isBig: false,
};
