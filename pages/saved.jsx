import * as React from 'react';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { OnlyUsers } from 'components/only-users';

//@ts-ignore
import savedIcon from '/images/icons/bookmark.png';

/** @type News[] */
const newsCardsDefault = [
	{
		id: 'asdasda',
		image: '',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fsdfsdf',
		image: '',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'asdasda',
		image: '',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fsdfsdf',
		image: '',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'asdasda',
		image: '',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fsdfsdf',
		image: '',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
];

/** @type News */
const newCard = {
	id: 'asdasdasgf',
	image: '',
	title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
	source: 'TomsHardware',
	created_at: '1 day ago',
	original_link: '/',
};

const Saved = ({ isServer }) => {
	const [newsCards, setNewsCards] = React.useState(newsCardsDefault);
	const fetchMore = () => {
		setTimeout(() => {
			setNewsCards([...newsCards, newCard]);
		}, 3000);
	};
	return (
		<OnlyUsers isServer={isServer}>
			<PageContainer>
				<Column gap="46" align="center">
					<HeadPage title="Saved" icon={savedIcon} />
					<ListNewsCard
						newsCards={newsCards}
						scroll="vertical"
						isInfinity
						hasMore
						fetchMoreHandler={() => fetchMore()}
					/>
				</Column>
			</PageContainer>
		</OnlyUsers>
	);
};

export default Saved;
