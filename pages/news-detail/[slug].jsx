//@ts-nocheck
import React from 'react';
import { NewsDetail } from 'components/news-detail';
import { useRouter } from 'next/router';

const NewsDetailPage = () => {
	const router = useRouter();
	return (
		<div>
			<NewsDetail id={router.query.slug} />
		</div>
	);
};

export default NewsDetailPage;
