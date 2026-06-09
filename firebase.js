// Firebase SDK Imports

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// Your Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyAnqzdBpOw7dtEzdb8LeYds2plWxM9NFfM",
  authDomain: "btn-beyond-the-noise.firebaseapp.com",
  projectId: "btn-beyond-the-noise",
  storageBucket: "btn-beyond-the-noise.firebasestorage.app",
  messagingSenderId: "382564403496",
  appId: "1:382564403496:web:65136da2eb198d1c99e81d",
  measurementId: "G-0ZCJ136SX1"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


// Export

export { db, auth };
