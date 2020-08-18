import * as React from 'react';
import { CategoryCard } from './category-card';
import { text } from 'body-parser';

export default {
	title: 'Category Card',
	component: CategoryCard,
};

/** @type News[] */
const fakeNews = [
	{
		id: 'yryutrutry',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		created_at: '1 day ago',
		original_link: '/',
		tags: `['AMD']`,
		source: {
			name: 'muycomputer',
			favicon: '',
		},
		likes: {
			aggregate: {
				count: 3,
			},
		},
		dislikes: {
			aggregate: {
				count: 3,
			},
		},
	},
	{
		id: 'asdaasdasdsda',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		created_at: '1 day ago',
		original_link: '/',
		tags: `['AMD']`,
		source: {
			name: 'muycomputer',
			favicon: '',
		},
		likes: {
			aggregate: {
				count: 3,
			},
		},
		dislikes: {
			aggregate: {
				count: 3,
			},
		},
	},
	{
		id: 'gdfhfdgh',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		created_at: '1 day ago',
		original_link: '/',
		tags: `['AMD']`,
		source: {
			name: 'muycomputer',
			favicon: '',
		},
		likes: {
			aggregate: {
				count: 3,
			},
		},
		dislikes: {
			aggregate: {
				count: 3,
			},
		},
	},
	{
		id: 'hjghjghj',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		created_at: '1 day ago',
		original_link: '/',
		tags: `['AMD']`,
		source: {
			name: 'muycomputer',
			favicon: '',
		},
		likes: {
			aggregate: {
				count: 3,
			},
		},
		dislikes: {
			aggregate: {
				count: 3,
			},
		},
	},
];

export const categoryCardComponent = () => (
	<CategoryCard
		news={fakeNews}
		title={{ text: 'FEATURED', emoji: '🔥' }}
		slug="featured"
	/>
);
