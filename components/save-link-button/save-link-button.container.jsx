import * as React from 'react';
import PropTypes from 'prop-types';
import { UserContext } from 'context';
import { SAVE_LINK, SAVE_LINK_VARIABLES } from 'graphql/mutations/links';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import {
	ALL_LINKS_SAVED_QUERY,
	ALL_LINKS_SAVED_QUERY_VARIABLES,
} from 'graphql/queries/links-saved';
import { FRAGMENT_LINKS_ALL_FIELDS } from 'graphql/fragments/links';

/**
 * @typedef {Object} SaveLinkButtonContainerProps
 * @property {string} id - Link id
 * @property {boolean} isDisabled - Tell if the link is disabled
 * @property {any} children
 */

/**
 * Wrapper to give save link functionality to children
 * @param {SaveLinkButtonContainerProps} props
 */
export const SaveLinkButtonContainer = (props) => {
	const user = React.useContext(UserContext);

	const [saveLink] = useMutation(SAVE_LINK, {
		variables: SAVE_LINK_VARIABLES(user ? user.uid : '', props.id),
	});

	const saveLinkHandler = () => {
		if (props.isDisabled) return;
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
				// Get current list of links saved
				const prevLinksSaved = await store.readQuery({
					query: ALL_LINKS_SAVED_QUERY,
					variables: ALL_LINKS_SAVED_QUERY_VARIABLES(user.uid, 0, 10),
				});
				// Get the fragment for the previous updated link
				const updatedLink = store.readFragment({
					id: `links:${props.id}`,
					fragment: FRAGMENT_LINKS_ALL_FIELDS,
					variables: {
						userId: user.uid,
					},
				});
				// Defined the link_saved to be add
				const linksSavedToAdd = {
					id: data.insert_links_saved.returning[0].id,
					link: updatedLink,
					__typename: 'links_saved',
				};
				// Defined the list of new saved links to be add
				let newLinksSaved = [];
				// Defined the total amount of saved links
				const newLinksSavedAggregate = {
					__typename: 'likes_saved_aggregate',
					aggregate: {
						__typename: 'likes_saved_aggregate_fields',
						count: prevLinksSaved.links_saved_aggregate.aggregate.count,
					},
				};
				// If the updated link is already in the list of saved links just return the list.
				// If not add the updated link to the list and update the total of saved links by 1
				if (
					prevLinksSaved.links_saved.some((l) => l.link.id === updatedLink.id)
				) {
					newLinksSaved = [...prevLinksSaved.links_saved];
				} else {
					newLinksSaved = [...prevLinksSaved.links_saved, linksSavedToAdd];
					newLinksSavedAggregate.aggregate.count++;
				}
				// Write the query with the new values for saved links and total of saved links
				store.writeQuery({
					query: ALL_LINKS_SAVED_QUERY,
					variables: ALL_LINKS_SAVED_QUERY_VARIABLES(user.uid, 0, 1),
					data: {
						links_saved: newLinksSaved,
						links_saved_aggregate: newLinksSavedAggregate,
					},
				});
			},
		});
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
