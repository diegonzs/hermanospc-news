import * as React from 'react';
import { UserContext } from '../context/user-context';
import { NetworkStatus } from '@apollo/client';
import { PageContainer } from 'components/page-container';
import { HeadPage } from 'components/head-page/head-page';
import { CategoryCard } from 'components/category-card';

//@ts-ignore
import styles from 'styles/pages/home.module.scss';
import {
	ALL_CATEGORIES_QUERY,
	ALL_CATEGORIES_QUERY_VARIABLES,
	ALL_CATEGORIES_QUERY_WITH_USER,
	ALL_LINKS_BY_CATEGORY_VARIABLES,
	ALL_LINKS_BY_CATEGORY_WITH_USER,
	ALL_LINKS_BY_CATEGORY,
} from 'graphql/queries/categories';
import { LoadingPage } from 'components/loading-page';
import { SourcesSelection } from 'components/sources-selection';
import { isFirstTimeVar } from 'lib/apollo-client';
import { useSwrQuery } from 'hooks';
import { ListNewsCard } from 'components/list-news-card';
import { MainNewsCard } from 'components/main-news-card';
import { Loader } from 'components/loader';

const fakeCategories = [
	{
		emoji: '🔥',
		id: 'asdasdasdasdasd',
		slug: 'latest',
		title: 'latest',
		links: [],
	},
	// {
	// 	emoji: '🛠️',
	// 	id: 'hjkhgjkghjkghjkghjk',
	// 	slug: 'hardware',
	// 	title: 'hardware',
	// 	links: [],
	// },
	// {
	// 	emoji: '🕹️',
	// 	id: 'asfaksdlfkjsadlkfjasdlkfj',
	// 	slug: 'gaming',
	// 	title: 'gaming',
	// 	links: [],
	// },
];

const Home = ({ initializing }) => {
	const user = React.useContext(UserContext);
	const categoriesQuery = user
		? ALL_LINKS_BY_CATEGORY_WITH_USER
		: ALL_LINKS_BY_CATEGORY;

	const { loading, data, networkStatus, fetchMore } = useSwrQuery(
		categoriesQuery,
		{
			variables: ALL_LINKS_BY_CATEGORY_VARIABLES(
				user ? user.uid : '',
				'latest',
				0
			),
			notifyOnNetworkStatusChange: true,
			fetchPolicy: 'cache-and-network',
		}
	);

	const fetchMoreHandler = () => {
		fetchMore({
			variables: {
				offset: data.categories[0].links.length,
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

	let hasNews = true;

	if (data && data.categories) {
		hasNews = data.categories.reduce((prev, current) => {
			if (current.links && current.links.length) return true;
			return prev;
		}, false);
	}

	let category;
	let mainCard;
	let commonCards;
	let hasMore = false;

	if (data && data.categories) {
		category = data.categories[0];
	}

	if (category) {
		mainCard = category.links[0];
		commonCards = [...category.links.slice(1)];
		hasMore = category.links_aggregate.aggregate.count > category.links.length;
	}

	if ((user && isFirstTimeVar()) || !hasNews) {
		return (
			<PageContainer customClass={styles.container}>
				{(loading || networkStatus === NetworkStatus.refetch) && (
					<LoadingPage />
				)}
				<SourcesSelection
					userId={user.uid}
					title="Welcome to News!"
					description="Tell us what sources do you want to see in your news feed. You can
				change this later any time. If you don't see your favorite source
				contact us to add it."
				/>
			</PageContainer>
		);
	}

	let categoriesToRender = [];

	if (loading || networkStatus === NetworkStatus.refetch) {
		categoriesToRender = fakeCategories;
	} else if (data && data.categories) {
		categoriesToRender = data.categories;
	}
	return (
		<PageContainer customClass={styles.container}>
			{/* {categoriesToRender.map((category, i) => ( */}
			<div className={styles.categories}>
				<HeadPage
					title={category ? category.title : 'latest'}
					emoji={category ? category.emoji : '🔥'}
					hasBack={false}
				/>
				{loading || networkStatus === NetworkStatus.refetch || initializing ? (
					<Loader />
				) : (
					<>
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
				{/* <CategoryCard
						title={
							!!i ? { text: category.title, emoji: category.emoji } : undefined
						}
						news={category.links}
						slug={category.slug}
						loading={loading}
					/> */}
			</div>
			{/* ))} */}
		</PageContainer>
	);
};

export default Home;
