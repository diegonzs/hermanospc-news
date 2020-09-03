import * as React from 'react';
import { HeaderView } from './header.view';
import Router from 'next/router';
import { initGA, logPageView } from 'lib/analytics';

export const HeaderContainer = () => {
	const [isMenuOn, toggleIsMenuOn] = React.useState(false);

	React.useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			//@ts-ignore
			if (!window.GA_INITIALIZED) {
				initGA();
				//@ts-ignore
				window.GA_INITIALIZED = true;
			}
			const ReactPixel = require('react-facebook-pixel');
			//@ts-ignore
			ReactPixel.default.init('381691672399829');
			logPageView();
			//@ts-ignore
			ReactPixel.default.pageView();
			Router.events.on('routeChangeComplete', () => {
				logPageView();
				//@ts-ignore
				ReactPixel.default.pageView();
			});
		}
	}, []);

	return (
		<HeaderView
			isMenuOn={isMenuOn}
			toggleIsMenuOn={() => toggleIsMenuOn(!isMenuOn)}
		/>
	);
};
