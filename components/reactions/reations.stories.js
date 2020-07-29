import * as React from 'react';
import { ReactionsView } from './reactions.view';

export default {
	title: 'Reactions',
	component: ReactionsView,
};

export const reactionEnable = () => (
	<ReactionsView
		data={0}
		icon="/images/example/thumbs-up.png"
		isActive={false}
		isDisabled={false}
	/>
);

export const reactionDisabledAndActive = () => (
	<ReactionsView
		data={10}
		icon="/images/example/thumbs-up.png"
		isActive={true}
		isDisabled={true}
	/>
);
