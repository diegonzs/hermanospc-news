import * as React from 'react';
import { NewsCard } from './news-card';

export default {
	title: 'News Card',
	component: NewsCard,
	parameters: {
		componentSubtitle: 'this component is very useful all around the page.',
	},
};

export const newsCard = () => (
	<div
		style={{
			width: '100%',
			height: '330px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<NewsCard
			news={{
				id: 'sadasd',
				image: '',
				title:
					'AMD Launch the Radeon VII: The next power product against Nvidia',
				source: 'TomsHardware',
				created_at: '1 day ago',
				original_link: '/',
			}}
		/>
	</div>
);
