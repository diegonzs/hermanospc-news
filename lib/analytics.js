import ReactGA from 'react-ga';

export const initGA = () => {
	const code = 'UA-131015775-4';
	ReactGA.initialize(code);
};

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category = '', action = '', label = '' }) => {
	if (category && action && label) {
		ReactGA.event({ category, action, label });
	}
};
