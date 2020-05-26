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
   * Function for handling user sign in with email and password
   * @param {handleSubmitParams} handleSinginParams 
   */
  const handleSignIn = ({ email, password }) => {
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
    <Sign
      title="Welcome back"
      buttonText="sign in"
      handleSubmit={handleSignIn}
      changeFormText="I do not have an accont"
      changeFormPath="signup"
    />
  )
}

export default Signin;
