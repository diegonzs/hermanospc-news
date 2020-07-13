import * as React from 'react';
import { useRouter } from 'next/router';

export const OverlayWrapper = ({ children, hideOverlayHandler }) => {
	const router = useRouter();
	React.useEffect(() => {
		const handleRouteChange = (url) => {
			console.log('App is changing to: ', url);
			hideOverlayHandler();
		};
		router.events.on('routeChangeStart', handleRouteChange);
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, []);
	return <>{children}</>;
};
