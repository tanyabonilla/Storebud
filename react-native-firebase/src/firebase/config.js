import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCltmp_p1khV4LRYqD4p3mcQOlkysC6GP0',
  authDomain: 'storebud-bb73b.firebaseapp.com',
  databaseURL: 'https://storebud-bb73b.firebaseio.com/',
  projectId: 'storebud-bb73b',
  storageBucket: 'storebud-bb73b.appspot.com',
  messagingSenderId: '19436831497',
  appId: '1:19436831497:ios:1327bb44560004390a09d8',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };