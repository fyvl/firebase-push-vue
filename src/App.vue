<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCb4Amk5eJNVOCXyDfIAE2De1m66SWg7b4",
  authDomain: "push-notifications-vue-37870.firebaseapp.com",
  projectId: "push-notifications-vue-37870",
  storageBucket: "push-notifications-vue-37870.appspot.com",
  messagingSenderId: "613849331879",
  appId: "1:613849331879:web:5435dc6e414ccc2db00382"
};


const app = initializeApp(firebaseConfig);


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BLZXDez8FopnUz-MdvsFuQiCqdYzQhsnj6H0kyJnZWn7McEtyK6x6GBbc98otmGNFD3r6UqR1eRWeto69SOqC7o' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("Token is:",currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
