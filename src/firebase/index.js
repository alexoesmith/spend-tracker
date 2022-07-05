import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8NWl_qm-LHPAA13sfjRC0GR0OTG5PUUo",
  authDomain: "vue-3-auth-16fb4.firebaseapp.com",
  projectId: "vue-3-auth-16fb4",
  storageBucket: "vue-3-auth-16fb4.appspot.com",
  messagingSenderId: "10382718948",
  appId: "1:10382718948:web:aa2514ffcda2f0a03579f1",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
