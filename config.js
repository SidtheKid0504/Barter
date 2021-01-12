import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCJ25PS_r3eAje8fa3Xrf6H86VZAcbupEo",
    authDomain: "barter-a281f.firebaseapp.com",
    projectId: "barter-a281f",
    storageBucket: "barter-a281f.appspot.com",
    messagingSenderId: "289295685763",
    appId: "1:289295685763:web:f15354f204a67a4edaa3b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();