import Parser from "rss-parser";

const state = {
    articles: []
}
const getters = {
    allArticles: () => state.articles
}

const actions = {
    async fetchArticles({commit}) {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        let parser = new Parser({
            customFields: {
                item: [
                    'summary',
                    ['link', 'linkArray', {keepArray: true}]
                ],
            }
        });
        parser.parseURL(CORS_PROXY + 'https://www.vrt.be/vrtnws/nl.rss.headlines.xml', (err, feed) => {
            if (err) throw err;
            let articles = [];
            feed.items.forEach(item => {
                let duplicate = false;
                articles.forEach(article =>{
                    if(article.link === item.link) duplicate = true;
                })
                if(duplicate) return;
                const article = {
                    link: item.link,
                    title: item.title,
                    imageSrc: item.linkArray[2].$.href,
                    summary: item.summary,
                    pubDate: item.pubDate,
                }
                articles.push(article);
            })
            articles.sort(function(a, b) {
                return (a.pubDate > b.pubDate) ? -1 : ((a.pubDate < b.pubDate) ? 1 : 0);
            });
            commit('setArticles', articles)
        })
    }
}

const mutations = {
    setArticles: (state, articles) => (state.articles = articles)
}

export default {
    state,
    getters,
    actions,
    mutations
}