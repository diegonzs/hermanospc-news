import * as React from 'react';
import { UserContext } from 'context/user-context';
import Router from 'next/router';

export const Settings = () => {
  const user = React.useContext(UserContext);
  
  /** Redirect the user to home if he/she is logged in */
  React.useEffect(() => {
    if (!user) {
      Router.push('/')
    }
  }, [user])
  
  return (
    <div></div>
  )
}