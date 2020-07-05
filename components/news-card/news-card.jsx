import * as React from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
import styles from './news-card.module.scss';

/**
 * Use to show tthe preview of a new
 * @param {NewsCardProps} props
 */
export const NewsCard = ({
	news: { title, image, source, howLong, original_link },
	isBig,
}) => {
	return (
		<a
			href={original_link}
			target="_blank"
			className={isBig ? styles.containerBigger : styles.container}
		>
			<img src={image} alt="" className={styles.image} />
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.row}>
				<span className={styles.source}>: {source}</span>
				<span className={styles.howLong}>{howLong}</span>
			</div>
		</a>
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
		howLong: PropTypes.string.isRequired,
		/** Where it sends the user when clicked. */
		original_link: PropTypes.string.isRequired,
	}),
	/** Determines if the card is big.  */
	isBig: PropTypes.bool,
};

NewsCard.defaultProps = {
	isBig: false,
};
