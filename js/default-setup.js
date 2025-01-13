const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

// Serve environment variables securely
app.get('/firebase-config', (req, res) => {
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

fetch('/firebase-config')
  .then((response) => response.json())
  .then((config) => {
    console.log('Firebase Config:', config);
    // Initialize Firebase here
    const app = initializeApp(config);
    const analytics = getAnalytics(app);
  })
  .catch((error) => console.error('Error fetching Firebase config:', error));
