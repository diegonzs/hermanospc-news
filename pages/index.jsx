import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import { UserContext } from '../context/user-context';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import firebase from '../lib/firebase-client';
import { PageContainer } from 'components/page-container';
import { HeadPage } from 'components/head-page/head-page';
import { CategoryCard } from 'components/category-card';
import { convertCategories } from 'lib/converter';

//@ts-ignore
import styles from 'styles/pages/home.module.scss';

const ALL_LINKS = gql`
	query ALL_LINKS($offset: Int) {
		links(limit: 1, offset: $offset) {
			__typename
			id
			title
			original_link
			# likes_count: likes_aggregate(where: { is_like: { _eq: true }}) {
			#   aggregate {
			#     count
			#   }
			# }
			# dislikes_count: likes_aggregate(where: { is_like:{ _eq:false }}) {
			#   aggregate {
			#     count
			#   }
			# }
		}
	}
`;

function Home(props) {
	/** @type {CategoryListFromDB[]} */
	const categories = [
		{
			id: 'dasdfgdfg',
			emoji: '😂',
			title: 'The best news',
			links: [
				{
					id: 'asdasd',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'ghjghj',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'jghcvxc',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'iouiouio',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'cvbcvwerewrghgh',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
			],
		},
		{
			id: 'fsdfxbxcasd',
			emoji: '😱',
			title: 'The worst news',
			links: [
				{
					id: 'kflsdjflskd',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'skdfligjdoifgu',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'sccdtzxrcets',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: ',mxzcv,xmcoeirie',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
				{
					id: 'suhfisduf8783423',
					image: 'https://i.redd.it/1um8uengwo331.jpg',
					title:
						'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
					created_at: '1 day ago',
					original_link: 'https://google.com',
					source: 'MuyComputer',
					tags: [
						{
							tag: {
								text: 'AMD',
							},
						},
						{
							tag: {
								text: 'CPU',
							},
						},
					],
				},
			],
		},
	];
	const modCategories = convertCategories(categories);
	const { loading, error, data } = useQuery(ALL_LINKS, {
		variables: { offset: 0 },
	});

	useEffect(() => {
		if (loading) {
			console.log('the data is loading...');
		} else if (error) {
			console.log(error);
		} else {
			console.log({ data });
		}
	}, [loading, data, error]);

	return (
		<PageContainer customClass={styles.container}>
			{categories &&
				modCategories.map((category, i) => (
					<div className={styles.categories} key={category.id}>
						{!i && (
							<HeadPage
								title={categories[0].title}
								emoji={categories[0].emoji}
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
						/>
					</div>
				))}
		</PageContainer>
	);
}

// Home.getInitialProps = async ({ req }) => {
//   const user = req && req.session ? req.session.decodedToken : null;
//   // if (req) {
//   //   console.log('this is the session', req.session);
//   //   console.log('this is the session decoded token', req.session.decodedToken);
//   //   console.log('this is the session token', req.session.token);
//   // }
//   // console.log('running getServerSideProps');
//   // don't fetch anything from firebase if the user is not found
//   // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
//   // const messages = snap && snap.val()
//   return {
//     user,
//   }
// }

export default withApollo({ ssr: true })(Home);
