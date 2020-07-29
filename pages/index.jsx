import * as React from 'react';
import { UserContext } from '../context/user-context';
import { useQuery } from '@apollo/client';
import { PageContainer } from 'components/page-container';
import { HeadPage } from 'components/head-page/head-page';
import { CategoryCard } from 'components/category-card';

//@ts-ignore
import styles from 'styles/pages/home.module.scss';
import {
	ALL_CATEGORIES_QUERY,
	ALL_CATEGORIES_QUERY_VARIABLES,
} from 'graphql/queries/categories';
import { LoadingPage } from 'components/loading-page';

const Home = () => {
	const user = React.useContext(UserContext);

	const { loading, data } = useQuery(ALL_CATEGORIES_QUERY, {
		variables: ALL_CATEGORIES_QUERY_VARIABLES(user ? user.uid : ''),
	});

	return (
		<PageContainer customClass={styles.container}>
			{loading && <LoadingPage />}
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
