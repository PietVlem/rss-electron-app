const vrt = require('./vrt');
const verge = require('./verge');

getArticles = () => {
    vrt.getVrtArticles();
    verge.getVergeArticles();
}

module.exports = {
    getArticles,
}