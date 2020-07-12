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
		created_at: '1 day ago',
		original_link: 'https://google.com',
		source: 'MuyComputer',
		tags: [
			{
				text: 'AMD',
			},
			{
				text: 'CPU',
			},
		],
	},
	{
		id: 'ghjghj',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
		created_at: '1 day ago',
		original_link: 'https://google.com',
		source: 'MuyComputer',
		tags: [
			{
				text: 'AMD',
			},
			{
				text: 'CPU',
			},
		],
	},
	{
		id: 'jghcvxc',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Ryzen 5 3500X: The next product against Intel.',
		created_at: '1 day ago',
		original_link: 'https://google.com',
		source: 'MuyComputer',
		tags: [
			{
				text: 'AMD',
			},
			{
				text: 'CPU',
			},
		],
	},
];

export const RelatedNewsContainer = () => {
	const [news, setNews] = React.useState([]);
	React.useEffect(() => {
		setTimeout(() => {
			setNews([...fakeNews]);
		}, 5000);
	}, []);
	if (news.length < 1) {
		return <Loader />;
	}
	return <RelatedNewsView news={news} />;
};
