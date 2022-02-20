import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAqZyLNavnjZiDUtrHv8WxnHnjK8tlx58o",
  authDomain: "invoice-app-97ec7.firebaseapp.com",
  projectId: "invoice-app-97ec7",
  storageBucket: "invoice-app-97ec7.appspot.com",
  messagingSenderId: "6309977384",
  appId: "1:6309977384:web:57f126ee87b15e4857041d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();