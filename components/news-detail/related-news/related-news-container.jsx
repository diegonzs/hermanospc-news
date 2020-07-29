import * as React from 'react';
import { RelatedNewsView } from './related-news.view';
import { Loader } from 'components/loader';

/**
 * @type {News[]}
 */
const fakeNews = [
	{
		id: 'asdasd',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
		created_at: '2020-07-14T15:56:10.160136+00:00',
		original_link: 'https://google.com',
		source: {
			name: 'Muy Computer',
			favicon:
				'https://www.muycomputer.com/wp-content/uploads/2018/07/MC_FAVICON_2018.png',
		},
		tags: [
			{
				tag: {
					text: 'AMD',
				},
			},
			{
				tag: {
					text: 'AMD',
				},
			},
		],
	},
	{
		id: 'ghjghj',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
		created_at: '2020-07-14T15:56:10.160136+00:00',
		original_link: 'https://google.com',
		source: {
			name: 'Muy Computer',
			favicon:
				'https://www.muycomputer.com/wp-content/uploads/2018/07/MC_FAVICON_2018.png',
		},
		tags: [
			{
				tag: {
					text: 'AMD',
				},
			},
			{
				tag: {
					text: 'AMD',
				},
			},
		],
	},
	{
		id: 'jghcvxc',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
		created_at: '2020-07-14T15:56:10.160136+00:00',
		original_link: 'https://google.com',
		source: {
			name: 'Muy Computer',
			favicon:
				'https://www.muycomputer.com/wp-content/uploads/2018/07/MC_FAVICON_2018.png',
		},
		tags: [
			{
				tag: {
					text: 'AMD',
				},
			},
			{
				tag: {
					text: 'AMD',
				},
			},
		],
	},
];

export const RelatedNewsContainer = () => {
	const [news, setNews] = React.useState([]);
	React.useEffect(() => {
		const timer = setTimeout(() => {
			setNews([...fakeNews]);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);
	if (news.length < 1) {
		return <Loader />;
	}
	return <RelatedNewsView news={news} />;
};
