import config from './FirebaseConfig.jsx'
import firebase from 'firebase'

firebase.initializeApp(config);

export default firebase;
