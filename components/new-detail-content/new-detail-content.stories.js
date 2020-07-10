import React from 'react';
import { NewDetailContent } from './new-detail-content';

export default {
	title: 'News Detail Content',
	component: NewDetailContent,
	parameters: {
		componentSubtitle: 'This is the content details for news',
	},
};

export const newDetailContent = () => <NewDetailContent />;
