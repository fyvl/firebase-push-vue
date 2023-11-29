var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// This registration token comes from the client FCM SDKs.
const registrationToken = 'ekNGqaPkPitCHKU4GXNoZw:APA91bFQyZnH1j4mLecq6_qPLuW2SppASkgIWdX-dqXkUXMugUywSbg2fcAmvMMPinSVl2gkDz418QXglCjpGPZlQawl5bNkzgz0WaAwKQaJLfgsQCPiWHDdPHb34kSVvhqZGe96CZgX';

const message = {
  notification: {
    title: "I am Admin",
    body: "Hi client"
  },
  webpush: {
    fcmOptions: {
      link: '/?breakingnews'
    }
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });