export const setSources = (sources) =>
	localStorage.setItem('sources', JSON.stringify(sources));

export const getSources = () => {
	const sources = localStorage.getItem('sources');
	if (sources) {
		return JSON.parse(sources);
	} else {
		return null;
	}
};

export const removeFCMToken = () => localStorage.removeItem('fcm_token');
