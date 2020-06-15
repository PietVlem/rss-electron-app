const firebase = require('../database');

getVrtArticles = async() => {
    const articles = await firebase
        .firestore()
        .collection('vrt')
        .get();
    return articles.docs.map(article => article.data());
}

module.exports = {
    getVrtArticles,
}