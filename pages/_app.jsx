//@ts-nocheck
import App from 'next/app';
import Head from 'next/head';
import { UserContext } from '../context/user-context';
import { useFirebaseUser } from '../hooks/useFirebaseUser';
import { Header } from '../components/header';
import { Footer } from 'components/footer';

import '../styles/main.scss';

function MyApp({ Component, pageProps, sessionUser, isServer }) {
	const user = useFirebaseUser(sessionUser);
	return (
		<UserContext.Provider value={user}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="mainContainer">
				<Header />
				<div className="mainContent">
					<Component {...pageProps} isServer={isServer} />
				</div>
				<Footer />
			</div>
		</UserContext.Provider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const sessionUser =
		appContext.ctx.req && appContext.ctx.req.session
			? appContext.ctx.req.session.decodedToken
			: null;
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps, sessionUser, isServer: !!appContext.ctx.req };
};

export default MyApp;
