import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { SaveLinkButton } from './save-link-button';

const IS_LINK_SAVED_BY_USER = gql``;

export const SaveLinkButtonContainer = () => {
	const {} = useQuery(IS_LINK_SAVED_BY_USER);
	return <SaveLinkButton isSaved={false} />;
};
