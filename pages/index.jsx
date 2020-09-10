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
} from 'graphql/queries/categories';
import { LoadingPage } from 'components/loading-page';
import { SourcesSelection } from 'components/sources-selection';
import { isFirstTimeVar } from 'lib/apollo-client';
import { useSwrQuery } from 'hooks';

const fakeCategories = [
	{
		emoji: '🔥',
		id: 'asdasdasdasdasd',
		slug: 'latest',
		title: 'latest',
		links: [],
	},
	{
		emoji: '🛠️',
		id: 'hjkhgjkghjkghjkghjk',
		slug: 'hardware',
		title: 'hardware',
		links: [],
	},
	{
		emoji: '🕹️',
		id: 'asfaksdlfkjsadlkfjasdlkfj',
		slug: 'gaming',
		title: 'gaming',
		links: [],
	},
];

const Home = () => {
	const user = React.useContext(UserContext);
	const categoriesQuery = user
		? ALL_CATEGORIES_QUERY_WITH_USER
		: ALL_CATEGORIES_QUERY;

	const { loading, data, networkStatus } = useSwrQuery(categoriesQuery, {
		variables: ALL_CATEGORIES_QUERY_VARIABLES(user ? user.uid : ''),
		notifyOnNetworkStatusChange: true,
		fetchPolicy: 'cache-and-network',
	});

	let hasNews = true;

	if (data && data.categories) {
		hasNews = data.categories.reduce((prev, current) => {
			if (current.links && current.links.length) return true;
			return prev;
		}, false);
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
			{categoriesToRender.map((category, i) => (
				<div className={styles.categories} key={category.id}>
					{!i && (
						<HeadPage
							title={category.title}
							emoji={category.emoji}
							hasBack={false}
						/>
					)}
					<CategoryCard
						title={
							!!i ? { text: category.title, emoji: category.emoji } : undefined
						}
						news={category.links}
						slug={category.slug}
						loading={loading}
					/>
				</div>
			))}
		</PageContainer>
	);
};

export default Home;
