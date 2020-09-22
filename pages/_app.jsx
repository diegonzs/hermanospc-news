//@ts-nocheck
import App from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';

import { useApollo } from 'lib/apollo-client';

import { UserContext, NewsContext } from 'context';
import { useFirebaseUser } from 'hooks';

import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { OverlayPage } from 'components/overlay-page';
import { NewsDetail } from 'components/news-detail';

import { renewToken } from 'lib/firebase-messaging';

import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
	const [currentToken, setCurrentToken] = React.useState();
	const [initializing, setInitializing] = React.useState(true);
	const router = useRouter();
	const user = useFirebaseUser(setCurrentToken, setInitializing);
	const apolloClient = useApollo(pageProps.initialApolloState, currentToken);
	const newsDetailRef = React.useRef(null);

	const [selectedNews, setSelectedNews] = React.useState(null);
	const [isOverlayActive, setIsOverlayActive] = React.useState(false);

	React.useEffect(() => {
		if (isOverlayActive) {
			router.push(router.pathname);
			console.log(newsDetailRef);
			newsDetailRef.current.scrollTop = 0;
		}
		if (!!selectedNews) {
			router.push(router.pathname, `/news-detail/${selectedNews.id}`);
			setIsOverlayActive(true);
		}
	}, [selectedNews]);

	React.useEffect(() => {
		if (user) {
			setCurrentToken(user.token);
		}
	}, [user]);

	React.useEffect(() => {
		renewToken();
	}, []);

	const hideOverlayHandler = React.useCallback((url) => {
		console.log(url);
		router.push(url || '/');
		setIsOverlayActive(false);
		setTimeout(() => {
			setSelectedNews(null);
		}, 300);
	}, []);

	const justCloseOverlay = React.useCallback(() => {
		setIsOverlayActive(false);
		setTimeout(() => {
			setSelectedNews(null);
		}, 300);
	}, []);

	React.useEffect(() => {
		router.beforePopState(({ url, as }) => {
			console.log({ url, as, isOverlayActive });
			hideOverlayHandler(url);
			return true;
		});
	}, [hideOverlayHandler]);

	return (
		<ApolloProvider client={apolloClient}>
			<UserContext.Provider value={user}>
				<NewsContext.Provider
					value={{ selectedNews, setSelectedNews, justCloseOverlay }}
				>
					<Head>
						<title>Hermanos PC News</title>
						<meta name="robots" content="noindex, follow" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<meta name="application-name" content="HPC News" />
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta
							name="apple-mobile-web-app-status-bar-style"
							content="black"
						/>
						<meta name="apple-mobile-web-app-title" content="HPC News" />
						<meta
							name="description"
							content="Get the trends and latest news in gaming and tech industry"
						/>
						<meta name="format-detection" content="telephone=no" />
						<meta name="mobile-web-app-capable" content="yes" />
						<meta name="apple-touch-fullscreen" content="yes" />
						<meta name="msapplication-TileColor" content="#000000" />
						<meta name="msapplication-tap-highlight" content="no" />
						<meta name="theme-color" content="#000000" />
						<link rel="manifest" href="/manifest.json" />
						<link rel="shorcut icon" href="/brand/favicon.png" />
					</Head>
					<div className="mainContainer">
						<Header />
						<div className="mainContent">
							<Component
								{...pageProps}
								isServer={false}
								initializing={initializing}
							/>
						</div>
						<Footer />
						<ToastContainer position="bottom-center" />
						<OverlayPage
							isActive={!!selectedNews && isOverlayActive}
							hideOverlayHandler={hideOverlayHandler}
							reference={newsDetailRef}
						>
							{!!selectedNews && (
								<NewsDetail
									news={selectedNews}
									id={selectedNews.id}
									onBack={() => hideOverlayHandler(router.pathname)}
								/>
							)}
						</OverlayPage>
					</div>
				</NewsContext.Provider>
			</UserContext.Provider>
		</ApolloProvider>
	);
}

export default MyApp;
