import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { MainNewsCardView } from './main-news-card.view';
import { ModalContainer } from 'components/modal-container/modal-container';
import { ShareModal } from 'components/share-modal';
import { UserContext } from 'context/user-context';
import { NewsContext } from 'context/news-context';
import { useMutation } from '@apollo/client';
import { SAVE_LINK, SAVE_LINK_VARIABLES } from 'graphql/mutations/links';
import { FRAGMENT_LINKS_ALL_FIELDS } from 'graphql/fragments/links';
import {
	ALL_LINKS_SAVED_QUERY,
	ALL_LINKS_SAVED_QUERY_VARIABLES,
} from 'graphql/queries/links-saved';

/**
 * This is the main news card component for the news section
 * @param {News} props
 */
export const MainNewsCardContainer = (props) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const { setSelectedNews } = React.useContext(NewsContext);
	const user = React.useContext(UserContext);

	const [saveLink] = useMutation(SAVE_LINK, {
		variables: SAVE_LINK_VARIABLES(user ? user.uid : '', props.id),
	});

	return (
		<>
			<MainNewsCardView
				news={props}
				openModalHandler={(value) => setIsModalOpen(value)}
				onClickNewsHandler={(value) => setSelectedNews(value)}
			/>
			<ModalContainer
				isOpen={isModalOpen}
				closeHandler={() => setIsModalOpen(false)}
			>
				<ShareModal
					closeModalHandler={() => setIsModalOpen(false)}
					title={props.title}
					url={`https://news.hermanospc.co/news-detail/${props.id}`}
				/>
			</ModalContainer>
		</>
	);
};

MainNewsCardContainer.propTypes = {
	/**  Main image of the article */
	image: PropTypes.string.isRequired,
	/**  List of tags to be render */
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
	/** Tells if the link is saved by the user */
	link_saved: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
		})
	),
};
