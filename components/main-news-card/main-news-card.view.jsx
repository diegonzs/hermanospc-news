import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SVG from 'react-inlinesvg';
import { ListTag } from 'components/list-tag/list-tag';
import { Row } from 'components/row/row';
import { Reactions } from 'components/reactions';

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
	saveLinkHandler,
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
	} = news;
	return (
		<div className={styles.columns}>
			<div
				className={styles.imageContainer}
				onClick={() => onClickNewsHandler(news)}
			>
				<img src={image} className={styles.mainImage} />
			</div>
			<div className={styles.leftColumn}>
				{tags && <ListTag tags={JSON.parse(tags)} gap="20" />}
				<span className={styles.title} onClick={() => onClickNewsHandler(news)}>
					{title}
				</span>
				<div className={styles.likeSection}>
					<Row>
						<Row isGrid={true} gap="16">
							<div
								className={styles.icon}
								onClick={() => {
									links_saved.length ? null : saveLinkHandler();
								}}
							>
								<SVG src={links_saved.length ? bookmarkedIcon : bookmarkIcon} />
							</div>
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
								icon="/images/example/thumbs-up.png"
								isActive={
									!!(reactions.length && reactions[0].emoji === 'U+1F44D')
								}
								isDisabled={!!reactions.length}
								linkId={id}
								iconCode="U+1F44D"
							/>
							<Reactions
								data={dislikes.aggregate.count}
								icon="/images/example/thumbs-down.png"
								isActive={
									!!(reactions.length && reactions[0].emoji === 'U+1F44E')
								}
								isDisabled={!!reactions.length}
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
		</div>
	);
};

MainNewsCardView.propTypes = {
	news: PropTypes.shape({
		/**  Main image of the article */
		image: PropTypes.string.isRequired,
		/**  List of tags to be render */
		tags: PropTypes.array.isRequired,
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
