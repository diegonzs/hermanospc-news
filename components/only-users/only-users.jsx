import * as React from 'react';
import { UserContext } from 'context/user-context';
import Router from 'next/router';
import { LoadingPage } from 'components/loading-page';

/**
 * This component only allow user to see a page. 
 */
export const OnlyUsers = ({ children, isServer }) => {
  const user = React.useContext(UserContext);
  const [isLoading, setIsLoading] = React.useState(isServer);
  
  React.useEffect(() => {
    console.log(isServer);
  }, [isServer])

  /** Redirect the user to home if he/she isn't logged in */
  React.useEffect(() => {
    if (!user) {
      Router.push('/signup')
    } else {
      setIsLoading(false);
    }
  }, [user])

  if (isLoading) {
    return <LoadingPage />
  } else {
    return children;
  }
}
