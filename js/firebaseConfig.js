// firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyBcowCU3fWiqZgkR73M18JwNnNBlw8jdBk",
  authDomain: "cprp-shopp.firebaseapp.com",
  projectId: "cprp-shopp",
  storageBucket: "cprp-shopp.appspot.com",
  messagingSenderId: "220335210417",
  appId: "1:220335210417:web:059ca478b5b7d262994790"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha a referência do Firebase Storage
const storage = firebase.storage();
