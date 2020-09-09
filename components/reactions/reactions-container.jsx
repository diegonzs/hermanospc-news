import * as React from 'react';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { ReactionsView } from './reactions.view';
import {
	CREATE_REACTION,
	CREATE_REACTION_VARIABLES,
} from 'graphql/mutations/reactions';
import { UserContext } from 'context/user-context';

/**
 * @typedef {Object} ReactionsContainerProps
 * @property {number} data - number of likes/dislikes
 * @property {string} icon - like/dislike icon
 * @property {string} iconCode - like/dislike icon code
 * @property {boolean} isActive - Tells if the user likes or dislikes
 * @property {boolean} isDisabled - Indicates if the reaction is disabled
 * @property {boolean} isDisabled - Indicates if the reaction is disabled
 * @property {string} linkId - Indicates the link id
 * @property {boolean} [isBig] - Tells if the reaction icon should be big
 * @property {number} total - Total of reactions
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
										: props.total - props.data,
								},
							};
							return newValue;
						},
						reactions() {
							return [...data.insert_reactions.returning];
						},
					},
				});
			},
		});
	};

	return (
		<ReactionsView {...props} createReactionHandler={createReactionHandler} />
	);
};
