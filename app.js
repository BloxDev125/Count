import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBQN8MmExJSEdIAqijezA0kCFpDaPWb5Ng",
    authDomain: "earnest-topic-370317.firebaseapp.com",
    databaseURL: "https://earnest-topic-370317-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "earnest-topic-370317",
    storageBucket: "earnest-topic-370317.appspot.com",
    messagingSenderId: "64593897017",
    appId: "1:64593897017:web:29f4d450b2ae648d280fe8",
    measurementId: "G-XWKMVYV5TG"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()
const analytics = getAnalytics(app);

initializeApp(firebaseConfig);

const countRef = ref(db, '/count');

function updateCount() {
    onValue(countRef, (snapshot) => {
        const count = snapshot.val();
        document.getElementById('count').innerText = count;
    });
}

function incrementCount() {
    transaction(countRef, (count) => {
    return (count || 0) + 1;
    });
}

document.getElementById('increment-btn').addEventListener('click', incrementCount);

updateCount();