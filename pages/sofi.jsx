import React from 'react';
import { CategoryCard } from 'components/category-card';

/** @type News[] */
const fakeNews = [
	{
		id: 'asdasda',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
		tags: [
			{
				text: 'AMD',
			},
		],
	},
	{
		id: 'fdsfsdf',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'fghf',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'xvxcvxcv',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
	{
		id: 'vbntsrefgdf',
		image:
			'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-0/p640x640/58654697_10159049832938084_1241544564167147520_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=T3slQCEd0jkAX81nm02&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=82675925a86e837cf013f3eb97454214&oe=5F0227AC',
		title: 'AMD Launch the Radeon VII: The next power product against Nvidia',
		source: 'TomsHardware',
		created_at: '1 day ago',
		original_link: '/',
	},
];

const Sofi = () => {
	const [data, setData] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true);
	const [hasError, setHasError] = React.useState(false);
	React.useEffect(() => {
		(async () => {
			try {
				const data = await fetch('http://localhost:3000');
				const dataJson = await data.json();
				console.log(dataJson);
				setIsLoading(false);
				setData(dataJson.items);
			} catch (err) {
				console.log(err);
				setHasError(true);
			}
		})();
	}, []);
	if (isLoading) return <h1>Loading....</h1>;
	if (hasError) return <h1>Check console to see the error</h1>;
	return (
		<div>
			<h1>Aqui va la data</h1>
			{data && data[0] && (
				<div
					dangerouslySetInnerHTML={{
						__html: data[0]['content:encoded'],
					}}
				></div>
			)}
		</div>
	);
};

export default Sofi;
