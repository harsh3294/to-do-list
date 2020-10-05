import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChgGMHq7fw5ugUzycrecXWG9kfOkG5bTE",
  authDomain: "todo-app-39072.firebaseapp.com",
  databaseURL: "https://todo-app-39072.firebaseio.com",
  projectId: "todo-app-39072",
  storageBucket: "todo-app-39072.appspot.com",
  messagingSenderId: "325570605790",
  appId: "1:325570605790:web:d2bb3dbf75306dad26884f",
  measurementId: "G-KJ3SVMLH89"
});

const db = firebaseApp.firestore();

export default db;