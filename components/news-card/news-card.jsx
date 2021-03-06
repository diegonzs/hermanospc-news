import * as React from 'react';
import PropTypes from 'prop-types';
import { NewsContext } from 'context/news-context';
import moment from 'moment';
// import { Image, Transformation, Placeholder } from 'cloudinary-react';

//@ts-ignore
import bookmarkIcon from '/images/svgs/bookmark.svg';
//@ts-ignore
import bookmarkedIcon from '/images/svgs/bookmarked.svg';

// @ts-ignore
import styles from './news-card.module.scss';
import { SaveLinkButtonContainer } from 'components/save-link-button/save-link-button.container';
import { UserContext } from 'context';
import { CloudinaryImage } from 'components/cloudinary-image';

/**
 * Use to show tthe preview of a new
 * @param {NewsCardProps} props
 */
export const NewsCard = ({ news, isBig }) => {
	const {
		id,
		title,
		image,
		source,
		created_at,
		links_saved,
		cloudinary_id,
	} = news;
	const { setSelectedNews } = React.useContext(NewsContext);
	const user = React.useContext(UserContext);
	return (
		<article
			onClick={() => {
				setSelectedNews(news);
			}}
			className={isBig ? styles.containerBigger : styles.container}
		>
			<picture className={styles.imageContainer}>
				{cloudinary_id ? (
					<CloudinaryImage
						cloudinaryId={cloudinary_id}
						customClassName={styles.image}
						bigSize="260"
						smallSize="152"
					/>
				) : image ? (
					<img src={image} className={styles.image} />
				) : (
					<div className={styles.image} />
				)}
				{/* <img src={image} alt="" className={styles.image} /> */}
			</picture>
			<div className={styles.iconContainer}>
				<SaveLinkButtonContainer
					id={id}
					isSaved={!!links_saved.length}
					saveLinkId={links_saved.length ? links_saved[0].id : ''}
					isDisabled={!user}
				>
					<img
						src={links_saved.length ? bookmarkedIcon : bookmarkIcon}
						className={styles.icon}
					/>
				</SaveLinkButtonContainer>
			</div>
			<div className={styles.contentContainer}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.row}>
					<div className={styles.rowContainer}>
						<span className={styles.source}>
							<img className={styles.sourceIco} src={source.favicon} alt="" />{' '}
							{source.name}
						</span>
						<span className={styles.created_at}>
							{moment(created_at).fromNow()}
						</span>
					</div>
					<div className={styles.iconForMobile}>
						<SaveLinkButtonContainer
							id={id}
							isSaved={!!links_saved.length}
							saveLinkId={links_saved.length ? links_saved[0].id : ''}
							isDisabled={!user}
						>
							<img
								src={links_saved.length ? bookmarkedIcon : bookmarkIcon}
								className={styles.icon}
							/>
						</SaveLinkButtonContainer>
					</div>
				</div>
			</div>
		</article>
	);
};

NewsCard.propTypes = {
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
	}),
	/** Determines if the card is big.  */
	isBig: PropTypes.bool,
};

NewsCard.defaultProps = {
	isBig: false,
};
