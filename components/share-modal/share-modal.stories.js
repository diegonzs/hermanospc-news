import React from 'react';
import { ShareModal } from './share-modal';

export default {
	title: 'Share Modal',
	component: ShareModal,
	parameters: {
		componentSubtitle: 'The share modal that displays all share buttons',
	},
};
export const shareModal = () => (
	<ShareModal
		closeModalHandler={() => null}
		title="Best News"
		url="https://news.hermanospc.co"
	/>
);
