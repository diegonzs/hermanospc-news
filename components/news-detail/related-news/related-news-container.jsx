import * as React from 'react';
import { RelatedNewsView } from './related-news.view';
import { Loader } from 'components/loader';
import { useQuery } from '@apollo/client';
import {
	RELATED_LINKS_BY_CATEGORY,
	RELATED_LINKS_BY_CATEGORY_VARIABLES,
} from 'graphql/queries/related-links';
import { UserContext } from 'context';

export const RelatedNewsContainer = ({ category, linkId }) => {
	const user = React.useContext(UserContext);

	const { data, loading } = useQuery(RELATED_LINKS_BY_CATEGORY, {
		variables: RELATED_LINKS_BY_CATEGORY_VARIABLES(
			user ? user.uid : '',
			category,
			linkId
		),
	});

	if (loading) {
		return <Loader />;
	}

	return <RelatedNewsView news={data ? data.links : []} category={category} />;
};
