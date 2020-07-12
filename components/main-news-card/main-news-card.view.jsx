import React from 'react';
import { NewsContext } from 'context/news-context';
import { ListTag } from 'components/list-tag/list-tag';
import { Row } from 'components/row/row';
import { Reactions } from 'components/reactions/reactions';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './main-news-card.module.scss';
//@ts-ignore
import imageExample from '/images/example/20200125114027.jpg';
//@ts-ignore
import bookmarkIcon from '/images/svgs/bookmark.svg';
//@ts-ignore
import shareIcon from '/images/svgs/share.svg';
import { getSourceIco } from 'lib/get-source-ico';

/**
 * @typedef {Object} MainNewsCardViewProps
 * @property {News} news
 * @property {(value: boolean) => void} openModalHandler
 */

/**
 * This is the main news card component for the news section
 * @param {MainNewsCardViewProps} props
 */
export const MainNewsCardView = ({ news, openModalHandler }) => {
	const { image, tags, title, original_link, source, created_at } = news;
	const { setSelectedNews } = React.useContext(NewsContext);
	return (
		<div className={styles.columns}>
			<div
				className={styles.imageContainer}
				onClick={() => setSelectedNews(news)}
			>
				<img src={image} className={styles.mainImage} />
			</div>
			<div className={styles.leftColumn}>
				{tags && <ListTag tags={tags} gap="20" />}
				<span className={styles.title} onClick={() => setSelectedNews(news)}>
					{title}
				</span>
				<div className={styles.likeSection}>
					<Row>
						<Row isGrid={true} gap="16">
							<img src={bookmarkIcon} style={{ paddingTop: '32px' }} />
							<img
								className={styles.icons}
								src={shareIcon}
								style={{ paddingTop: '32px', cursor: 'pointer' }}
								onClick={() => openModalHandler(true)}
							/>
						</Row>
						<Row isGrid={true} gap="32">
							<Reactions data="230" icon="/images/example/thumbs-up.png" />
							<Reactions data="10" icon="/images/example/thumbs-down.png" />
						</Row>
					</Row>
				</div>
				<Row>
					<span className={styles.source}>
						<img
							className={styles.sourceIco}
							src={getSourceIco('muycomputer')}
							alt=""
						/>{' '}
						{source}
					</span>
					<p className={styles.created_at}>{created_at}</p>
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
		source: PropTypes.string.isRequired,
		/**  date when the new was released */
		created_at: PropTypes.string.isRequired,
	}),
	openModalHandler: PropTypes.func.isRequired,
};
