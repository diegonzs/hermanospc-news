import React from 'react';
import { NewsDetail } from './news-detail';

export default {
	title: 'News Detail Content',
	component: NewsDetail,
	parameters: {
		componentSubtitle: 'This is the content details for news',
	},
};

export const newDetailContent = () => (
	<NewsDetail
		title="AMD Launch the Radeon VII: The next power product against Nvidia"
		autor="TomsHardware"
		image="https://i.redd.it/1um8uengwo331.jpg"
	/>
);
