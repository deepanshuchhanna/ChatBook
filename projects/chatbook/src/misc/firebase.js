/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDEy1-bchlZqjGGCvfWM4T-11zffm3PmlA',
  authDomain: 'chat-book-b72d5.firebaseapp.com',
  databaseURL: 'https://chat-book-b72d5-default-rtdb.firebaseio.com',
  projectId: 'chat-book-b72d5',
  storageBucket: 'chat-book-b72d5.appspot.com',
  messagingSenderId: '886264313877',
  appId: '1:886264313877:web:b38fb6247f38ee8a72f61c',
};

// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
