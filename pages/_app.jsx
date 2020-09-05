//@ts-nocheck
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apollo-client';

import { UserContext, NewsContext } from 'context';
import { useFirebaseUser } from 'hooks';

import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { OverlayPage } from 'components/overlay-page';
import { NewsDetail } from 'components/news-detail';
import { OverlayWrapper } from 'components/overlay-page/overlay-wrapper/overlay-wrapper';

import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
	const [currentToken, setCurrentToken] = React.useState();
	const user = useFirebaseUser(setCurrentToken);
	const apolloClient = useApollo(pageProps.initialApolloState, currentToken);

	const [selectedNews, setSelectedNews] = React.useState(null);
	const [isOverlayActive, setIsOverlayActive] = React.useState(false);

	React.useEffect(() => {
		if (!!selectedNews) {
			setIsOverlayActive(true);
		}
	}, [selectedNews]);

	React.useEffect(() => {
		if (user) {
			setCurrentToken(user.token);
		}
	}, [user]);

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
						<meta name="application-name" content="HPC News" />
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta
							name="apple-mobile-web-app-status-bar-style"
							content="black"
						/>
						<meta name="apple-mobile-web-app-title" content="HPC News" />
						<meta name="description" content="" />
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
							<Component {...pageProps} isServer={false} />
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

export default MyApp;
