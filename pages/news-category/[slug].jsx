import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { UserContext } from 'context/user-context';

import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { MainNewsCard } from 'components/main-news-card';
import { Loader } from 'components/loader';

import {
	ALL_LINKS_BY_CATEGORY,
	ALL_LINKS_BY_CATEGORY_VARIABLES,
	ALL_LINKS_BY_CATEGORY_WITH_USER,
} from 'graphql/queries/categories';

const CategoryPage = () => {
	const router = useRouter();
	const user = React.useContext(UserContext);

	const { slug } = router.query;
	let hasMore = false;
	const categoryQuery = user
		? ALL_LINKS_BY_CATEGORY_WITH_USER
		: ALL_LINKS_BY_CATEGORY;

	/** @type {News} */
	let mainCard;
	/** @type {News[]} */
	let commonCards = [];

	const { data, loading, fetchMore } = useQuery(categoryQuery, {
		variables: ALL_LINKS_BY_CATEGORY_VARIABLES(user ? user.uid : '', slug, 0),
	});

	const category = data && data.categories.length ? data.categories[0] : null;

	const fetchMoreHandler = () => {
		fetchMore({
			variables: {
				offset: category.links.length,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				const prevCategory = prev.categories[0];
				const newCategory = fetchMoreResult.categories[0];
				if (!fetchMoreResult) return prev;
				return {
					...prev,
					categories: [
						{
							...prevCategory,
							links: [...prevCategory.links, ...newCategory.links],
						},
					],
				};
			},
		});
	};

	if (category) {
		mainCard = category.links[0];
		commonCards = [...category.links.slice(1)];
		hasMore = category.links_aggregate.aggregate.count > category.links.length;
	}

	return (
		<PageContainer>
			<Column gap="46" align="center">
				{loading && <Loader />}
				{category && (
					<>
						<HeadPage title={category.title} emoji={category.emoji} />
						<MainNewsCard {...mainCard} />
						<ListNewsCard
							newsCards={commonCards}
							scroll="vertical"
							isInfinity
							hasMore={hasMore}
							fetchMoreHandler={() => fetchMoreHandler()}
						/>
					</>
				)}
			</Column>
		</PageContainer>
	);
};

export default CategoryPage;
