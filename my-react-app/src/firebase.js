import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4N_IpTw9vufPZ-Q-78LygUn80iiczjfs",
    authDomain: "trailingauth.firebaseapp.com",
    projectId: "trailingauth",
    storageBucket: "trailingauth.appspot.com",
    messagingSenderId: "435043819744",
    appId: "1:435043819744:web:b03fbcb35b37f2e2683085",
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
