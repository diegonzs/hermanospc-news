import * as React from 'react';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { ListNewsCard } from 'components/list-news-card';
import { MainNewsCard } from 'components/main-news-card';

const newsCardsDefault = [
	{
		id: 'asdasda',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fsdfsdf',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'asdasda',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fsdfsdf',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'asdasda',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fsdfsdf',
		image: 'https://i.redd.it/1um8uengwo331.jpg',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
];

const newCard = {
	id: 'asdasdasgf',
	image: 'https://i.redd.it/1um8uengwo331.jpg',
	title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
	source: 'TomsHardware',
	created_at: '1 day ago',
	original_link: '/',
};

const CategoryPage = () => {
	const [newsCards, setNewsCards] = React.useState(newsCardsDefault);
	const fetchMore = () => {
		setTimeout(() => {
			setNewsCards([...newsCards, newCard]);
		}, 3000);
	};
	return (
		<PageContainer>
			<Column gap="46" align="center">
				<HeadPage title="Featured" emoji="🔥" />
				<MainNewsCard
					id="fsdfnsdfm"
					image="https://i.redd.it/1um8uengwo331.jpg"
					tags={[{ text: 'AMD' }, { text: 'Graphic Card' }]}
					title="AMD Launch the Radeon VII: The next power product against Nvidia"
					original_link="/"
					source="TomsHardware"
					created_at="1 day ago"
				/>
				<ListNewsCard
					newsCards={newsCards}
					scroll="vertical"
					isInfinity
					hasMore
					fetchMoreHandler={() => fetchMore()}
				/>
			</Column>
		</PageContainer>
	);
};

export default CategoryPage;
