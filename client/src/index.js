import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "AIzaSyAqeeqPnuFma9EKXQKEx-fDFAcBG_kxyQc",
    authDomain: "papyros-aad7b.firebaseapp.com",
    databaseURL: "https://papyros-aad7b.firebaseio.com",
    projectId: "papyros-aad7b",
    storageBucket: "papyros-aad7b.appspot.com",
    messagingSenderId: "901528541772",
    appId: "1:901528541772:web:3f096d0953e96b2f24f2e9",
    measurementId: "G-27R6NLVVGG"});

    ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
