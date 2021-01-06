/* eslint-disable no-console */
/* eslint-disable no-alert */
// import { firebaseConfig } from  "config/config.js"
// // exporte suas funções

export const CreateUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.trim(), password)
    .then(() => {
      window.location.pathname = 'feed';
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const SingIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then(() => {
      window.location.pathname = 'feed';
    })
    .catch((error) => {

      alert(error.message);
    });
};

export const SingInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      const credential = firebase.auth().currentUser;
      window.location.pathname = 'feed';

      return credential;
    })
    .catch((error) => {
      alert(error.message);
    });
};

