import * as React from 'react';
import { useQuery } from '@apollo/client';

import { UserContext } from 'context/user-context';

import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { OnlyUsers } from 'components/only-users';
import { Loader } from 'components/loader';

//@ts-ignore
import savedIcon from '/images/icons/bookmark.png';
import {
	ALL_LINKS_SAVED_QUERY,
	ALL_LINKS_SAVED_QUERY_VARIABLES,
} from 'graphql/queries/links-saved';
import { UseSwrQuery } from 'hooks';

const Saved = ({ isServer }) => {
	const user = React.useContext(UserContext);
	const { data, fetchMore, loading } = UseSwrQuery(ALL_LINKS_SAVED_QUERY, {
		variables: ALL_LINKS_SAVED_QUERY_VARIABLES(user ? user.uid : '', 0, 10),
		fetchPolicy: 'cache-and-network',
	});

	/** @type {News[]} */
	let news = [];
	let hasMore = false;

	const fetchMoreHandler = () => {
		fetchMore({
			variables: {
				offset: data.links_saved.length,
				limit: 3,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return {
					...prev,
					links_saved: [...prev.links_saved, ...fetchMoreResult.links_saved],
				};
			},
		});
	};

	// if (data && data.links_saved) {
	// 	const listOfIds = [];
	// 	news = data.links_saved.reduce((acum, l) => {
	// 		if (!listOfIds.includes(l.link.id)) {
	// 			listOfIds.push(l.link.id);
	// 			return [...acum, { ...l.link }];
	// 		} else {
	// 			return acum;
	// 		}
	// 	}, []);
	// }

	if (data && data.links_saved) {
		news = data.links_saved.map((l) => l.link);
	}

	if (data && data.links_saved_aggregate && data.links_saved) {
		hasMore =
			data.links_saved_aggregate.aggregate.count > data.links_saved.length;
	}

	return (
		<OnlyUsers isServer={isServer}>
			<PageContainer>
				<Column gap="46" align="center">
					<HeadPage title="For Later" icon={savedIcon} />
					{loading && <Loader />}
					{!loading && data && data.links_saved && (
						<ListNewsCard
							newsCards={news}
							scroll="vertical"
							isInfinity
							hasMore={hasMore}
							fetchMoreHandler={() => fetchMoreHandler()}
						/>
					)}
				</Column>
			</PageContainer>
		</OnlyUsers>
	);
};

export default Saved;

// export default withApollo({ ssr: false })(Saved);
