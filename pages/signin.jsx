import React, { useState, useEffect, useContext } from 'react';
import firebase from '../lib/firebase-client';
import Router from 'next/router';
import { useFirebaseUser } from '../hooks/useFirebaseUser';
import { UserContext } from '../context/user-context';

const Signin = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    if (user) {
      Router.push('/')
    }
  }, [user])

  const handleSignIn = () => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        return;
      })
  }

  return (
    <div>
      <h1>Welcome again</h1>
      <form onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSignIn();
      }}>
        <input placeholder="email..." type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholde="password..." type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button>sign in</button>
      </form>
    </div>
  )
}

export default Signin;
