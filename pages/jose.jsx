import React, { useEffect, useState } from 'react';
import { JoseTitle } from 'components/jose-title';
import { withApollo } from '../lib/apollo';
import { NewDetailContent } from 'components/news-detail/content';

const Jose = () => {
	const [name, setName] = useState('');

	useEffect(() => {
		(async () => {
			const res = await fetch('/api/hello');
			const data = await res.json();
			setName(data.name);
		})();
	}, []);

	return (
		<>
			{/* <JoseTitle /> */}
			<NewDetailContent />
		</>
	);
};

export default withApollo({ ssr: false })(Jose);
