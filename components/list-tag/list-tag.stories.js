import * as React from 'react';
import { Tag } from './tag';
import { ListTag } from './list-tag';

export default {
	title: 'Listag',
	component: ListTag,
};

export const ListTagDefaultGap = () => (
	<ListTag tags={['AMD', 'Graphic Card']} />
);
export const ListTagCustomGap = () => (
	<ListTag tags={['AMD', 'Graphic Card']} gap="20" />
);
