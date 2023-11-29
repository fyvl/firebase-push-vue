// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCb4Amk5eJNVOCXyDfIAE2De1m66SWg7b4",
  authDomain: "push-notifications-vue-37870.firebaseapp.com",
  projectId: "push-notifications-vue-37870",
  storageBucket: "push-notifications-vue-37870.appspot.com",
  messagingSenderId: "613849331879",
  appId: "1:613849331879:web:5435dc6e414ccc2db00382"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/icon.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });