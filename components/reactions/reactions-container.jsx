import * as React from 'react';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { ReactionsView } from './reactions.view';
import {
	CREATE_REACTION,
	CREATE_REACTION_VARIABLES,
} from 'graphql/mutations/reactions';
import { UserContext } from 'context/user-context';
import { FRAGMENT_LINKS_ALL_FIELDS } from 'graphql/fragments/links';
import {
	ALL_FAVORITE_LINKS,
	ALL_FAVORITE_LINKS_VARIABLES,
} from 'graphql/queries/reactions';

/**
 * @typedef {Object} ReactionsContainerProps
 * @property {number} data - number of likes/dislikes
 * @property {string} icon - like/dislike icon
 * @property {string} iconCode - like/dislike icon code
 * @property {boolean} isActive - Tells if the user likes or dislikes
 * @property {boolean} isDisabled - Indicates if the reaction is disabled
 * @property {boolean} isDisabled - Indicates if the reaction is disabled
 * @property {string} linkId - Indicates the link id
 */

/**
 * This is the main news card component for the news section
 * @param {ReactionsContainerProps} props
 */
export const ReactionsContainer = (props) => {
	const user = React.useContext(UserContext);
	const [createReaction] = useMutation(CREATE_REACTION, {
		variables: CREATE_REACTION_VARIABLES(
			user ? user.uid : '',
			props.linkId,
			props.iconCode
		),
	});

	const createReactionHandler = () => {
		createReaction({
			optimisticResponse: {
				insert_reactions: {
					returning: [
						{
							id: uuidv4(),
							emoji: props.iconCode,
							__typename: 'reactions',
						},
					],
					__typename: 'reactions_mutation_response',
				},
			},
			update: async (store, { data }) => {
				// Modify Link fragment
				store.modify({
					id: `links:${props.linkId}`,
					fields: {
						reactions_aggregate(_, { storeFieldName }) {
							const newValue = {
								__typename: 'reactions_aggregate',
								aggregate: {
									__typename: 'reactions_aggregate_fields',
									count: storeFieldName.includes(props.iconCode)
										? props.data + 1
										: props.data,
								},
							};
							return newValue;
						},
						reactions() {
							return [...data.insert_reactions.returning];
						},
					},
				});
				// If reaction is a like add the link to list of favorites
				if (props.iconCode === 'U+1F44D') {
					// Get previous results for favorite links query
					const prevFavorites = store.readQuery({
						query: ALL_FAVORITE_LINKS,
						variables: ALL_FAVORITE_LINKS_VARIABLES(user.uid, 0, 1),
					});
					// Get the fragment for the previous updated link
					const updatedLink = store.readFragment({
						id: `links:${props.linkId}`,
						fragment: FRAGMENT_LINKS_ALL_FIELDS,
						variables: {
							userId: user.uid,
						},
					});
					// defined the new value for the list of favorite links
					let newFavoriteLinks = [];
					// defined the variable for the total count of favorite links
					const newFavoriteLinksAggregate = {
						__typename: 'links_aggregate',
						aggregate: {
							__typename: 'links_aggregate_fields',
							count: prevFavorites.favorite_links_aggregate.aggregate.count,
						},
					};
					// If the updated link is already in the list of favorite links just return the list.
					// If not add the updated link to the list and update the total of favorite links by 1
					if (
						prevFavorites.favorite_links.some((l) => l.id === updatedLink.id)
					) {
						newFavoriteLinks = [...prevFavorites.favorite_links];
					} else {
						newFavoriteLinks = [...prevFavorites.favorite_links, updatedLink];
						newFavoriteLinksAggregate.aggregate.count =
							newFavoriteLinksAggregate.aggregate.count + 1;
					}
					// Write the query with the new values for favorite links and total of favorite links
					store.writeQuery({
						query: ALL_FAVORITE_LINKS,
						variables: ALL_FAVORITE_LINKS_VARIABLES(user.uid, 0, 1),
						data: {
							favorite_links: newFavoriteLinks,
							favorite_links_aggregate: newFavoriteLinksAggregate,
						},
					});
				}
			},
		});
	};

	return (
		<ReactionsView {...props} createReactionHandler={createReactionHandler} />
	);
};
