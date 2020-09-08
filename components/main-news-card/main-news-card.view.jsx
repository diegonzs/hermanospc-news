import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SVG from 'react-inlinesvg';
import { ListTag } from 'components/list-tag/list-tag';
import { Row } from 'components/row/row';
import { Reactions } from 'components/reactions';

import { UserContext } from 'context';
import { SaveLinkButtonContainer } from 'components/save-link-button/save-link-button.container';
import { CloudinaryImage } from 'components/cloudinary-image';

//@ts-ignore
import styles from './main-news-card.module.scss';

//@ts-ignore
import bookmarkIcon from '/images/svgs/bookmark.svg';
//@ts-ignore
import bookmarkedIcon from '/images/svgs/bookmarked.svg';
//@ts-ignore
import shareIcon from '/images/svgs/share.svg';

/**
 * @typedef {Object} MainNewsCardViewProps
 * @property {News} news
 * @property {(value: boolean) => void} openModalHandler
 * @property {(value: News) => void} onClickNewsHandler
 * @property {() => void} saveLinkHandler
 */

/**
 * This is the main news card component for the news section
 * @param {MainNewsCardViewProps} props
 */
export const MainNewsCardView = ({
	news,
	openModalHandler,
	onClickNewsHandler,
}) => {
	const {
		id,
		image,
		tags,
		title,
		original_link,
		source,
		created_at,
		links_saved,
		reactions,
		likes,
		dislikes,
		cloudinary_id,
	} = news;
	const user = React.useContext(UserContext);
	return (
		<article className={styles.columns}>
			<div
				className={styles.imageContainer}
				onClick={() => onClickNewsHandler(news)}
			>
				{cloudinary_id ? (
					<CloudinaryImage
						cloudinaryId={cloudinary_id}
						customClassName={styles.mainImage}
						bigSize="798"
						smallSize="335"
					/>
				) : (
					<img src={image} className={styles.mainImage} />
				)}
			</div>
			<div className={styles.leftColumn}>
				{tags && <ListTag tags={JSON.parse(tags).slice(1, 2)} gap="20" />}
				<span className={styles.title} onClick={() => onClickNewsHandler(news)}>
					{title}
				</span>
				<div className={styles.likeSection}>
					<Row>
						<Row isGrid={true} gap="16">
							<SaveLinkButtonContainer
								id={id}
								isDisabled={!!(links_saved.length || !user)}
							>
								<div className={styles.icon}>
									<SVG
										src={links_saved.length ? bookmarkedIcon : bookmarkIcon}
									/>
								</div>
							</SaveLinkButtonContainer>
							<div
								className={styles.icon}
								onClick={() => openModalHandler(true)}
							>
								<SVG src={shareIcon} />
							</div>
						</Row>
						<Row isGrid={true} gap="32">
							<Reactions
								data={likes.aggregate.count}
								total={likes.aggregate.count + dislikes.aggregate.count}
								icon="/images/example/thumbs-up.png"
								isActive={
									!!(reactions.length && reactions[0].emoji === 'U+1F44D')
								}
								isDisabled={!!reactions.length || !user}
								linkId={id}
								iconCode="U+1F44D"
							/>
							<Reactions
								data={dislikes.aggregate.count}
								total={likes.aggregate.count + dislikes.aggregate.count}
								icon="/images/example/thumbs-down.png"
								isActive={
									!!(reactions.length && reactions[0].emoji === 'U+1F44E')
								}
								isDisabled={!!reactions.length || !user}
								linkId={id}
								iconCode="U+1F44E"
							/>
						</Row>
					</Row>
				</div>
				<Row>
					<span className={styles.source}>
						<img className={styles.sourceIco} src={source.favicon} alt="" />{' '}
						{source.name}
					</span>
					<p className={styles.created_at}>{moment(created_at).fromNow()}</p>
				</Row>
			</div>
		</article>
	);
};

MainNewsCardView.propTypes = {
	news: PropTypes.shape({
		/**  Main image of the article */
		image: PropTypes.string.isRequired,
		/**  Stringify list of tags to be render */
		tags: PropTypes.string,
		/**  title of the new */
		title: PropTypes.string.isRequired,
		/**  url link to show the detail of the new */
		original_link: PropTypes.string.isRequired,
		/**  Reactions section */
		source: PropTypes.shape({
			name: PropTypes.string,
			favicon: PropTypes.string,
		}).isRequired,
		/**  date when the new was released */
		created_at: PropTypes.string.isRequired,
	}),
	openModalHandler: PropTypes.func.isRequired,
	onClickNewsHandler: PropTypes.func.isRequired,
	saveLinkHandler: PropTypes.func.isRequired,
};
