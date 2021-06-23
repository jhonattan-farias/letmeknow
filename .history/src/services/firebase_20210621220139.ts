import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.,
    databaseURL:process.env.,
    projectId: process.env.,
    storageBucket: process.env.,
    messagingSenderId: "201254920881",
    appId: "1:201254920881:web:85759579ac761222c93890"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()