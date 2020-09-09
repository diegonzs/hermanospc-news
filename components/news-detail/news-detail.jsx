import * as React from 'react';
import PropTypes from 'prop-types';
import { ContentComponent } from './content';
import { BackButton } from 'components/back-button';
import { ListTag } from 'components/list-tag';
import { RelatedNews } from './related-news';
import { ReactionsForDetails } from './reactions';
import { UserContext } from 'context';
import { ShareModal } from 'components/share-modal';
import { Row } from 'components/row';
import SVG from 'react-inlinesvg';

//@ts-ignore
import bookmarkIcon from '/images/svgs/bookmark.svg';
//@ts-ignore
import bookmarkedIcon from '/images/svgs/bookmarked.svg';
//@ts-ignore
import shareIcon from '/images/svgs/share.svg';

// @ts-ignore
import styles from './news-detail.module.scss';
import { ModalContainer } from 'components/modal-container/modal-container';
import { SaveLinkButtonContainer } from 'components/save-link-button/save-link-button.container';
import {
	GET_LINK_BY_ID,
	GET_LINK_BY_ID_VARIABLES,
} from 'graphql/queries/links';
import { useQuery } from '@apollo/client';
import { LoadingPage } from 'components/loading-page';
import { CloudinaryImage } from 'components/cloudinary-image';

/** @type {News} */
const fakeNews = {
	id: 'asdasdasd',
	title: '',
	source: { favicon: '', name: '' },
	tags: '[]',
	image: '',
	content: '',
	category: { slug: '' },
	original_link: '',
	likes: { aggregate: { count: 0 } },
	dislikes: { aggregate: { count: 0 } },
	reactions: [],
	links_saved: [],
	cloudinary_id: '',
	created_at: '',
};

/**
 * @typedef {Object} NewsDetailProps
 * @property {string} id - News ID
 * @property {News} [news] - news to render while loading.
 * @property {() => void} [onBack] - Function to override back button behaviour
 */

/**
 * Component to show the news detail
 * @param {NewsDetailProps} props
 */
export const NewsDetail = ({ news, id, onBack }) => {
	const user = React.useContext(UserContext);
	const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);

	const { data, loading, error } = useQuery(GET_LINK_BY_ID, {
		variables: GET_LINK_BY_ID_VARIABLES(user ? user.uid : '', id),
		fetchPolicy: 'cache-first',
	});

	/**
	 * @type {News}
	 */
	let newsData;

	if (data && data.links_by_pk) {
		console.log('using query');
		newsData = data.links_by_pk;
		console.log(data.links_by_pk.reactions);
	} else if (news) {
		console.log('using news from props');
		newsData = news;
	} else if (loading) {
		console.log('using fake news');
		newsData = fakeNews;
	}

	const {
		title,
		source,
		tags,
		image,
		content,
		category,
		original_link,
		likes,
		dislikes,
		reactions,
		links_saved,
		cloudinary_id,
	} = newsData;
	if (loading && !news) return <LoadingPage />;
	return (
		<div className={styles.container}>
			<div className={styles.NewsDetailContainer}>
				<div className={styles.header}>
					<div className={styles.backbutton}>
						<BackButton text="Back" handleClick={onBack} />
					</div>
					<div className={styles.tags}>
						{tags && <ListTag tags={JSON.parse(tags).slice(1, 2)} />}
					</div>
				</div>
				<div className={styles.image}>
					{cloudinary_id ? (
						<CloudinaryImage
							cloudinaryId={cloudinary_id}
							bigSize="798"
							smallSize="335"
						/>
					) : (
						<img src={image} />
					)}
				</div>
				<div className={styles.autor}>
					<img src={source.favicon} alt="" width="13" />
					{source.name}
				</div>
				<Row isGrid={true} gap="20" customClass={styles.socialBox}>
					<SaveLinkButtonContainer
						id={id}
						isDisabled={!!(links_saved.length || !user)}
					>
						<div className={styles.icon}>
							<SVG src={links_saved.length ? bookmarkedIcon : bookmarkIcon} />
						</div>
					</SaveLinkButtonContainer>
					<div
						className={styles.icon}
						onClick={() => setIsShareModalOpen(true)}
					>
						<SVG src={shareIcon} />
					</div>
				</Row>
				<div className={styles.title}>
					<h1>{title}</h1>
				</div>
				<ContentComponent content={content} />
				{!content.includes('<p') && (
					<div className={styles.noContent}>
						<h2>
							Check this new in{' '}
							<a href={original_link} target="_blank" rel="noopener">
								{source.name}
							</a>
						</h2>
					</div>
				)}
			</div>
			<ReactionsForDetails
				likes={likes}
				dislikes={dislikes}
				reactions={reactions}
				user={user}
				id={id}
			/>
			<RelatedNews category={category.slug} linkId={id} />
			<ModalContainer
				isOpen={isShareModalOpen}
				closeHandler={() => setIsShareModalOpen(false)}
			>
				<ShareModal closeModalHandler={() => setIsShareModalOpen(false)} />
			</ModalContainer>
		</div>
	);
};

NewsDetail.propTypes = {
	/** Link's ID */
	id: PropTypes.string.isRequired,
	/** Function to override back button functionality */
	onBack: PropTypes.func,
};
