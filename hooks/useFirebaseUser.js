import { useState, useEffect } from 'react';
import 'isomorphic-unfetch';
import firebase from "../lib/firebase-client";

export const useFirebaseUser = (initialUser, createUser) => {
  const [finalUser, setFinalUser] = useState(initialUser);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const userData = {
          email: user.email,
          id: user.uid
        };
        // Get the firebase token from the user.
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        // Get the hasura custom claims from the firebase token.
        const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];
        // Check if the firebase user already have the hasura custom claims.
        if (hasuraClaim) {
          // Set the user.
          setFinalUser({
            ...userData,
            token,
          })
          // Create the user session in the backend.
          fetch('/api/login', {
            method: 'POST',
            // eslint-disable-next-line no-undef
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ token }),
          }).then(res => res.json()).then(json => console.log('data from backend', json));
        } else {
          const metadataRef = firebase
            .database()
            .ref("metadata/" + user.uid + "/refreshTime");
          
          // Set the listener on the refreshed user's token
          metadataRef.on("value", async (data) => {
            if(!data.exists) return;
            // Force refresh to pick up the latest custom claims changes.
            const newToken = await user.getIdToken(true);
            // Set the user
            setFinalUser({
              ...userData,
              token: newToken,
            })
            // refresh the token in the session backend
            fetch('/api/login', {
              method: 'POST',
              // eslint-disable-next-line no-undef
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'same-origin',
              body: JSON.stringify({ token: newToken }),
            }).then(res => res.json()).then(json => console.log('data from backend', json));
            // Generate a random number to use in the username.
            const randomNumber = Math.floor(1000 + Math.random() * 9000);
            // Get the section of the email before the @ to use in the username.
            const userNameFromEmail = user.email.split('@')[0].replace('.', '');
            // Create the autogenerated username.
            userData.username = `${userNameFromEmail}${randomNumber}`;
            // Insert the user in the DB.
            createUser({ variables: { ...userData } });
          });
        }
      } else {
        // Set the user to null
        setFinalUser(null)
        // call log out on the backend to delete the session
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin',
        }).then(res => console.log('backend response og logout', res));
      }
    });
  }, [])
  
  return finalUser;
}