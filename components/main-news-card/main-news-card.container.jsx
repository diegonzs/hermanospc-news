import * as React from 'react';
import PropTypes from 'prop-types';
import { MainNewsCardView } from './main-news-card.view';
import { ModalContainer } from 'components/modal-container/modal-container';
import { ShareModal } from 'components/share-modal';

/**
 * This is the main news card component for the news section
 * @param {News} props
 */
export const MainNewsCardContainer = (props) => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	return (
		<>
			<MainNewsCardView
				news={props}
				openModalHandler={(value) => setIsModalOpen(value)}
			/>
			<ModalContainer
				isOpen={isModalOpen}
				closeHandler={() => setIsModalOpen(false)}
			>
				<ShareModal closeModalHandler={() => setIsModalOpen(false)} />
			</ModalContainer>
		</>
	);
};

MainNewsCardContainer.propTypes = {
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
};
