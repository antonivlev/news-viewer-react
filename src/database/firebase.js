import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDCoD2HrdDqUwnYPwv1dPuyLNrmy1zAsOU',
  authDomain: 'news-viewer-9c5e5.firebaseapp.com',
  databaseURL: 'https://news-viewer-9c5e5.firebaseio.com',
  projectId: 'news-viewer-9c5e5',
  storageBucket: 'news-viewer-9c5e5.appspot.com',
  messagingSenderId: '845065741149',
  appId: '1:845065741149:web:a0d740586ccca8ada5feb4',
  measurementId: 'G-8XT6P50Q05',
};

firebase.initializeApp(config);
export default firebase;
