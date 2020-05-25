//@ts-nocheck
import App from 'next/app';
import { UserContext } from '../context/user-context';
import { useFirebaseUser } from '../hooks/useFirebaseUser';
import { Header } from '../components/header';
import '../styles/style.scss'

function MyApp({ Component, pageProps, sessionUser }) {
  const user = useFirebaseUser(sessionUser);
  return (
    <UserContext.Provider value={user}>
      <Header />
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const sessionUser = appContext.ctx.req && appContext.ctx.req.session ? appContext.ctx.req.session.decodedToken : null;
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, sessionUser }
}

export default MyApp