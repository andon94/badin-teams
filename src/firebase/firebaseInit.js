import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3KofI7WX4tH5lHTJ-9Yi_E8w4vvzQpn0",
  authDomain: "badinteams-5e98b.firebaseapp.com",
  projectId: "badinteams-5e98b",
  storageBucket: "badinteams-5e98b.appspot.com",
  messagingSenderId: "571113146968",
  appId: "1:571113146968:web:c1939a6dab5f4ccc68d82d"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default fireBaseApp.firestore();