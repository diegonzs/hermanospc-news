import React, { useContext } from 'react';
import { UserContext } from '../context/user-context';

const Me = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user && user.email}</h1>
    </div>
  )
}

export default Me;