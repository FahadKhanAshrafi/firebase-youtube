import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEroMRpwx6I17THmZ8U47_qh-W77v90LM",
    authDomain: "fir-auth-c4947.firebaseapp.com",
    databaseURL: "https://fir-auth-c4947.firebaseio.com",
    projectId: "fir-auth-c4947",
    storageBucket: "fir-auth-c4947.appspot.com",
    messagingSenderId: "1067730842185"
};
const fireBase = firebase.initializeApp(config);

export default fireBase;