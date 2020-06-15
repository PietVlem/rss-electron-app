var admin = require('firebase-admin');
var serviceAccount = require("../firebase-service-account.json");

/*
Firestore
*/
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rsshub-a8ccb.firebaseio.com"
});

async function getVrtArticles() {
    const articles = await admin
        .firestore()
        .collection('feeds')
        .doc('vrt')
        .get();
    return articles.data().articles.map(article => article);
}

module.exports = {
    getVrtArticles,
}