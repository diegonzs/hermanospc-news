import React, { useEffect, useContext } from 'react';
import firebase from 'lib/firebase-client';
import Router from 'next/router';
import { UserContext } from 'context/user-context';
import { Sign } from 'components/sign';

/** Signin Page */
const Signin = () => {
  const user = useContext(UserContext);
  
  /** Redirect the user to home if he/she is logged in */
  useEffect(() => {
    if (user) {
      Router.push('/')
    }
  }, [user])

  /**
   * Function for handling user sign up with email and password
   * @param {handleSubmitParams} handleSinginParams
   */
  const handleSignUp = ({ email, password }) => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        return;
      })
  }
/**
 * Function for handling signin with third party providers
 * @param {"google" | "twitter" | "facebook"} provider - The provider the user will use to signin
 */
  const handleSigninProvider = provider => {
    let firebaseProvider;
    if (provider === 'google') {
      firebaseProvider = new firebase.auth.GoogleAuthProvider();
    } else if (provider === 'facebook') {
      firebaseProvider = new firebase.auth.FacebookAuthProvider();
    } else if (provider === 'twitter') {
      firebaseProvider = new firebase.auth.TwitterAuthProvider();
    } else {
      return;
    }
    firebase.auth()
      .signInWithPopup(firebaseProvider)
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        return;
      })
  }

  return (
    <Sign
      title="Hermanos PC news"
      buttonText="Create account"
      handleSubmit={handleSignUp}
      handleSigninProvider={handleSigninProvider}
      changeFormText="I already have an account"
      changeFormPath="signin"
      hasTick={true}
    />
  )
}

export default Signin;
