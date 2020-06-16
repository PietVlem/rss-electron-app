const firebase = require('../database');

getVrtArticles = async() => {
    const articles = await firebase
        .firestore()
        .collection('vrt')
        .get();
    const payload = articles.docs.map(article => article.data());
    return payload.sort(function (a, b) {
        return new Date(b.pubDate) - new Date(a.pubDate);
    });
}

getVergeArticles = async() => {
    const articles = await firebase
        .firestore()
        .collection('verge')
        .get();
    const payload = articles.docs.map(article => article.data());
    return payload.sort(function (a, b) {
        return new Date(b.pubDate) - new Date(a.pubDate);
    });
}

module.exports = {
    /* queries */
    getVrtArticles,
    getVergeArticles,
}