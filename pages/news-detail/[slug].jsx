//@ts-nocheck
import React from 'react';
import { NewsDetail } from 'components/news-detail';
import { useRouter } from 'next/router';
import { GET_LINK_BY_ID_SEO } from 'graphql/queries/links';
import { NextSeo } from 'next-seo';
import { LoadingPage } from 'components/loading-page';

const NewsDetailPage = ({ parseResponse, initializing }) => {
	const router = useRouter();
	return (
		<div>
			{parseResponse && parseResponse.data && parseResponse.data.links_by_pk && (
				<NextSeo
					title={parseResponse.data.links_by_pk.title}
					openGraph={{
						url: `https://news.hermanospc.co/news-detail/${router.query.slug}`,
						title: parseResponse.data.links_by_pk.title,
						images: [{ url: parseResponse.data.links_by_pk.image }],
					}}
				/>
			)}
			{initializing ? <LoadingPage /> : <NewsDetail id={router.query.slug} />}
		</div>
	);
};

NewsDetailPage.getInitialProps = async ({ req, query }) => {
	if (req) {
		const response = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: GET_LINK_BY_ID_SEO(query.slug) }),
		});
		const parseResponse = await response.json();
		return {
			parseResponse,
		};
	}
};

export default NewsDetailPage;
