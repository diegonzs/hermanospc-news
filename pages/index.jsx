import * as React from 'react';
import { UserContext } from '../context/user-context';
import { useQuery, NetworkStatus } from '@apollo/client';
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

const Home = () => {
	const user = React.useContext(UserContext);
	const categoriesQuery = user
		? ALL_CATEGORIES_QUERY_WITH_USER
		: ALL_CATEGORIES_QUERY;

	const { loading, data, networkStatus } = useQuery(categoriesQuery, {
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

	return (
		<PageContainer customClass={styles.container}>
			{(loading || networkStatus === NetworkStatus.refetch) && <LoadingPage />}
			{data &&
				data.categories &&
				data.categories.map((category, i) => (
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
								!!i
									? { text: category.title, emoji: category.emoji }
									: undefined
							}
							news={category.links}
							slug={category.slug}
						/>
					</div>
				))}
		</PageContainer>
	);
};

export default Home;
