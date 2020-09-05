import * as React from 'react';
import { useQuery } from '@apollo/client';

import { UserContext } from 'context/user-context';

import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { OnlyUsers } from 'components/only-users';

import {
	ALL_FAVORITE_LINKS,
	ALL_FAVORITE_LINKS_VARIABLES,
} from 'graphql/queries/reactions';

//@ts-ignore
import thumbUpIcon from '/images/icons/emoji-favorites.png';
import { Loader } from 'components/loader';
import { useSwrQuery } from 'hooks';

const Favorites = ({ isServer }) => {
	const user = React.useContext(UserContext);

	const { data, fetchMore, loading } = useSwrQuery(ALL_FAVORITE_LINKS, {
		variables: ALL_FAVORITE_LINKS_VARIABLES(user ? user.uid : '', 0, 10),
		fetchPolicy: 'cache-and-network',
	});

	// /** @type {News[]} */
	// let news = [];
	let hasMore = false;

	const fetchMoreHandler = () => {
		fetchMore({
			variables: {
				offset: data.favorite_links.length,
				limit: 3,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return {
					...prev,
					favorite_links: [
						...prev.favorite_links,
						...fetchMoreResult.favorite_links,
					],
				};
			},
		});
	};

	// if (data && data.favorite_links) {
	// 	const listOfIds = [];
	// 	news = data.favorite_links.reduce((acum, l) => {
	// 		if (!listOfIds.includes(l.id)) {
	// 			listOfIds.push(l.id);
	// 			return [...acum, l];
	// 		} else {
	// 			return acum;
	// 		}
	// 	}, []);
	// }
	if (data && data.favorite_links_aggregate && data.favorite_links) {
		hasMore =
			data.favorite_links_aggregate.aggregate.count >
			data.favorite_links.length;
	}

	return (
		<OnlyUsers isServer={isServer}>
			<PageContainer>
				<Column gap="46" align="center">
					<HeadPage title="Favorites" icon={thumbUpIcon} />
					{loading && <Loader />}
					{!loading && data && data.favorite_links && (
						<ListNewsCard
							newsCards={data.favorite_links}
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

export default Favorites;
