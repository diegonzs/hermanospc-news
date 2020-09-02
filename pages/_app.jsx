//@ts-nocheck
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apollo-client';

import { UserContext, NewsContext } from 'context';
import { useFirebaseUser } from 'hooks';

import { initMessaging } from 'lib/firebase-messaging';

import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { OverlayPage } from 'components/overlay-page';
import { NewsDetail } from 'components/news-detail';
import { OverlayWrapper } from 'components/overlay-page/overlay-wrapper/overlay-wrapper';

import {
	ALL_LINKS_SAVED_QUERY_VARIABLES,
	ALL_LINKS_SAVED_QUERY,
} from 'graphql/queries/links-saved';
import {
	ALL_FAVORITE_LINKS,
	ALL_FAVORITE_LINKS_VARIABLES,
} from 'graphql/queries/reactions';

import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { useRouter } from 'next/router';
// import { initGA, logPageView } from 'lib/analytics';

function MyApp({ Component, pageProps, sessionUser, isServer, user_token }) {
	const [currentToken, setCurrentToken] = React.useState(user_token);
	const user = useFirebaseUser(sessionUser, setCurrentToken);
	const router = useRouter();
	const apolloClient = useApollo(pageProps.initialApolloState, currentToken);

	const [selectedNews, setSelectedNews] = React.useState(null);
	const [isOverlayActive, setIsOverlayActive] = React.useState(false);

	React.useEffect(() => {
		if (!!selectedNews) {
			setIsOverlayActive(true);
		}
	}, [selectedNews]);

	React.useEffect(() => {
		apolloClient.query({
			query: ALL_LINKS_SAVED_QUERY,
			variables: ALL_LINKS_SAVED_QUERY_VARIABLES(user ? user.uid : '', 0, 10),
		});
		apolloClient.query({
			query: ALL_FAVORITE_LINKS,
			variables: ALL_FAVORITE_LINKS_VARIABLES(user ? user.uid : '', 0, 10),
		});
	}, [user]);

	// React.useEffect(() => {
	// 	if (process.env.NODE_ENV === 'development') {
	// 		if (!window.GA_INITIALIZED) {
	// 			initGA();
	// 			window.GA_INITIALIZED = true;
	// 		}
	// 		const ReactPixel = require('react-facebook-pixel');
	// 		ReactPixel.init('381691672399829');
	// 		logPageView();
	// 		ReactPixel.pageView();
	// 		router.events.on('routeChangeComplete', () => {
	// 			logPageView();
	// 			ReactPixel.pageView();
	// 		});
	// 	}
	// }, []);

	const hideOverlayHandler = () => {
		setIsOverlayActive(false);
		setTimeout(() => {
			setSelectedNews(null);
		}, 250);
	};

	return (
		<ApolloProvider client={apolloClient}>
			<UserContext.Provider value={user}>
				<NewsContext.Provider value={{ selectedNews, setSelectedNews }}>
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<meta name="application-name" content="PWA App" />
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta
							name="apple-mobile-web-app-status-bar-style"
							content="default"
						/>
						<meta name="apple-mobile-web-app-title" content="PWA App" />
						<meta name="description" content="Best PWA App in the world" />
						<meta name="format-detection" content="telephone=no" />
						<meta name="mobile-web-app-capable" content="yes" />
						<meta name="msapplication-TileColor" content="#2B5797" />
						<meta name="msapplication-tap-highlight" content="no" />
						<meta name="theme-color" content="#000000" />
						<link rel="manifest" href="/manifest.json" />
					</Head>
					<div className="mainContainer">
						<Header />
						<div className="mainContent">
							<Component {...pageProps} isServer={isServer} />
						</div>
						<Footer />
						<OverlayPage
							isActive={!!selectedNews && isOverlayActive}
							hideOverlayHandler={hideOverlayHandler}
						>
							{!!selectedNews && (
								<OverlayWrapper hideOverlayHandler={hideOverlayHandler}>
									<NewsDetail
										news={selectedNews}
										id={selectedNews.id}
										onBack={hideOverlayHandler}
									/>
								</OverlayWrapper>
							)}
						</OverlayPage>
					</div>
				</NewsContext.Provider>
			</UserContext.Provider>
		</ApolloProvider>
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
	const user_token =
		appContext.ctx.req && appContext.ctx.req.session
			? appContext.ctx.req.session.token
			: null;
	const appProps = await App.getInitialProps(appContext);
	return {
		...appProps,
		sessionUser,
		isServer: !!appContext.ctx.req,
		user_token,
	};
};

export default MyApp;
