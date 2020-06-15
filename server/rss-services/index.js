const vrt = require('./vrt');

getArticles = () => {
    vrt.getVrtArticles();
}

module.exports = {
    getArticles,
}