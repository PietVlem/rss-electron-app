var admin = require('firebase-admin');
var serviceAccount = require("../database/firebase-service-account.json");

/*
Firestore
*/
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rsshub-a8ccb.firebaseio.com"
});

module.exports = admin;