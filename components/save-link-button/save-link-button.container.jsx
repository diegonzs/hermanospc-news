import * as React from 'react';
import PropTypes from 'prop-types';
import { UserContext } from 'context';
import { SAVE_LINK, SAVE_LINK_VARIABLES } from 'graphql/mutations/links';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

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
