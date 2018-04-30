import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyACuNaAih0SdI5-65AZB-jLaMCGn5E9gHA",
  authDomain: "personal-site-fb3df.firebaseapp.com",
  databaseURL: "https://personal-site-fb3df.firebaseio.com",
  projectId: "personal-site-fb3df",
  storageBucket: "personal-site-fb3df.appspot.com",
  messagingSenderId: "446539785199"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage };
