import * as React from 'react';

const Testing = () => {
	const callApi = async () => {
		try {
			const response = await fetch('/api/fcm-register-topic', {
				method: 'POST',
				body: JSON.stringify({
					token: localStorage.getItem('fcm_token'),
					topic: 'testing',
				}),
			});
			const data = await response.json();
			console.log({ data });
		} catch (error) {
			console.log({ error });
		}
	};
	return (
		<div>
			<h1>This page is only for testing</h1>
			<button onClick={callApi}>Click here to see what happened</button>
		</div>
	);
};

export default Testing;
