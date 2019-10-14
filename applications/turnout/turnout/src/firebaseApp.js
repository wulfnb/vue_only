import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBqsr8ma8URWOLB4Mb5ns5nrEjol5f4kQc",
    authDomain: "test-project-f0740.firebaseapp.com",
    databaseURL: "https://test-project-f0740.firebaseio.com",
    projectId: "test-project-f0740",
    storageBucket: "test-project-f0740.appspot.com",
    messagingSenderId: "43540185464",
    appId: "1:43540185464:web:7fa1b906ce61068d8c488d",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)