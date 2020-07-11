import React, { useEffect, useState } from 'react';
import { JoseTitle } from 'components/jose-title';
import { withApollo } from '../lib/apollo';

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
		<div>
			{/* <JoseTitle /> */}
		</div>
	);
};

export default withApollo({ ssr: false })(Jose);
