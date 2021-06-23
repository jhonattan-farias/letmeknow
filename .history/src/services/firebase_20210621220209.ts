import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
    databaseURL:process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.,
    messagingSenderId: process.env.,
    appId: process.env.
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()