import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import { UserContext } from '../context/user-context';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import firebase from '../lib/firebase-client';

const ALL_LINKS = gql`
  query ALL_LINKS($offset: Int) {
    links(limit: 1, offset: $offset) {
      __typename
      id
      title
      url
      likes_count: likes_aggregate(where: { is_like: { _eq: true }}) {
        aggregate {
          count
        }
      }
      dislikes_count: likes_aggregate(where: { is_like:{ _eq:false }}) {
        aggregate {
          count
        }
      }
    }
  }
`;

function Home(props) {
  const user = useContext(UserContext);
  const { loading, error, data } = useQuery(ALL_LINKS, { variables: { offset: 0 } })
    
  useEffect(() => {
    if (loading) {
      console.log('the data is loading...')
    }else if (error) {
      console.log(error)
    } else {
      console.log({ data });
    }
  }, [loading, data, error])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          {user
            ? (
              <>
                <a
                  onClick={e => {
                    e.preventDefault();
                    firebase.auth().signOut()
                  }}
                  className="card"
                >
                  <h3>Log out &rarr;</h3>
                  <p>
                    Log Out :(
                  </p>
                </a>
                <Link
                  href="/me"
                >
                  <a className="card">
                    <h3>Me &rarr;</h3>
                    <p>This is my profile</p>
                  </a>
                </Link>
              </>
            ) : (
              <Link
                href="/signin"
              >
                <a className="card">
                  <h3>Signin page &rarr;</h3>

                </a>
              </Link>
            )
          }

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

// Home.getInitialProps = async ({ req }) => {
//   const user = req && req.session ? req.session.decodedToken : null;
//   // if (req) {
//   //   console.log('this is the session', req.session);
//   //   console.log('this is the session decoded token', req.session.decodedToken);
//   //   console.log('this is the session token', req.session.token);
//   // }
//   // console.log('running getServerSideProps');
//   // don't fetch anything from firebase if the user is not found
//   // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
//   // const messages = snap && snap.val()
//   return {
//     user,
//   }
// }

export default withApollo({ ssr: true })(Home);
