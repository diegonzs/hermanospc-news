import * as React from 'react';
import PropTypes from 'prop-types';
import { NewsContext, UserContext } from 'context';
import {
	SAVE_LINK,
	SAVE_LINK_VARIABLES,
	REMOVE_FROM_SAVE,
	REMOVE_FROM_SAVE_VARIABLES,
} from 'graphql/mutations/links';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {
	ALL_LINKS_SAVED_QUERY,
	ALL_LINKS_SAVED_QUERY_VARIABLES,
} from 'graphql/queries/links-saved';

/**
 * @typedef {Object} SaveLinkButtonContainerProps
 * @property {string} id - Link id
 * @property {boolean} isDisabled - Tell if the link is disabled
 * @property {boolean} isSaved - Tell if its saved or not
 * @property {string} saveLinkId - links_saved ID
 * @property {any} children
 */

/**
 * Wrapper to give save link functionality to children
 * @param {SaveLinkButtonContainerProps} props
 */
export const SaveLinkButtonContainer = (props) => {
	const user = React.useContext(UserContext);
	const { justCloseOverlay } = React.useContext(NewsContext);
	const router = useRouter();

	const [saveLink] = useMutation(SAVE_LINK, {
		variables: SAVE_LINK_VARIABLES(user ? user.uid : '', props.id),
		onCompleted: () => {
			toast('Added to saved news', {
				type: 'success',
			});
		},
	});

	const [removeFromSave] = useMutation(REMOVE_FROM_SAVE, {
		variables: REMOVE_FROM_SAVE_VARIABLES(props.saveLinkId),
		onCompleted: () => {
			toast('Remoed from saved news', {
				type: 'success',
			});
		},
	});

	const saveLinkHandler = () => {
		if (props.isDisabled) {
			router.push('/signup');
			justCloseOverlay();
			return;
		}
		if (props.isSaved) {
			removeFromSave({
				optimisticResponse: {
					insert_links_saved: {
						returning: [
							{
								id: uuidv4(),
								__typename: 'links_saved',
							},
						],
						__typename: 'links_saved_mutation_response',
					},
				},
				update: async (store) => {
					// Modify Link fragment
					store.modify({
						id: `links:${props.id}`,
						fields: {
							links_saved() {
								return [];
							},
						},
					});
				},
			});
		} else {
			saveLink({
				optimisticResponse: {
					insert_links_saved: {
						returning: [
							{
								id: uuidv4(),
								__typename: 'links_saved',
							},
						],
						__typename: 'links_saved_mutation_response',
					},
				},
				update: async (store, { data }) => {
					// Modify Link fragment
					store.modify({
						id: `links:${props.id}`,
						fields: {
							links_saved() {
								return [...data.insert_links_saved.returning];
							},
						},
					});
				},
			});
		}
	};

	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				saveLinkHandler();
			}}
			style={{ cursor: 'pointer' }}
		>
			{props.children}
		</div>
	);
};

SaveLinkButtonContainer.propTypes = {
	id: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool.isRequired,
};

SaveLinkButtonContainer.defaultProps = {
	isDisabled: true,
};
